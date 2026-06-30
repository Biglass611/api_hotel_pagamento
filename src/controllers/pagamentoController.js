const prisma = require('../config/prismaClient');
const { publishPagamentoEvent, publishResultadoPagamento } = require('../producers/pagamentoProducer');

// Tempo simulado de processamento por método (ms)
const DELAYS = { cartao: 5000, boleto: 12000, deposito: 8000 };

/**
 * "Gateway" simulado: decide aprovar ou recusar com base nos dados.
 * Cartão: número com 16 dígitos, CVV de 3 dígitos diferente de 000,
 * validade no formato AAAA-MM não vencida e não absurda, número não terminado em 0.
 * Boleto e depósito sempre compensam.
 */
function avaliarPagamento(metodo, dados = {}) {
  if (metodo === 'cartao') {
    const numero = String(dados.numero || '').replace(/\D/g, '');
    const cvv = String(dados.cvv || '');
    const validade = String(dados.validade || ''); // 'AAAA-MM'

    if (numero.length !== 16) return { aprovado: false, motivo: 'Número do cartão inválido (deve ter 16 dígitos).' };
    if (!/^\d{3}$/.test(cvv)) return { aprovado: false, motivo: 'CVV inválido (deve ter 3 dígitos).' };
    if (cvv === '000') return { aprovado: false, motivo: 'Cartão recusado pela operadora.' };

    const m = /^(\d{4})-(\d{2})$/.exec(validade);
    if (!m) return { aprovado: false, motivo: 'Validade inválida.' };
    const ano = parseInt(m[1]);
    const mes = parseInt(m[2]);
    if (mes < 1 || mes > 12) return { aprovado: false, motivo: 'Validade inválida.' };

    const agora = new Date();
    const fimValidade = new Date(ano, mes, 0, 23, 59, 59); // último dia do mês de validade
    if (fimValidade < agora) return { aprovado: false, motivo: 'Cartão vencido.' };
    if (ano > agora.getFullYear() + 20) return { aprovado: false, motivo: 'Validade inválida.' };

    if (numero.endsWith('0')) return { aprovado: false, motivo: 'Cartão sem limite disponível.' };

    return { aprovado: true, motivo: 'Pagamento aprovado.' };
  }

  if (metodo === 'boleto') return { aprovado: true, motivo: 'Boleto compensado.' };
  return { aprovado: true, motivo: 'Depósito confirmado.' };
}

/**
 * Processa um pagamento de forma assíncrona (simulada).
 * Responde 202 imediatamente com a decisão, agenda um timer e, ao final,
 * publica PAGAMENTO_APROVADO/RECUSADO no RabbitMQ para o MS Reserva confirmar a reserva.
 */
async function processar(req, res) {
  try {
    const { pagamento_id, reserva_id, metodo, dados } = req.body;

    if (!reserva_id || !metodo) {
      return res.status(400).json({ error: 'Campos obrigatórios: reserva_id e metodo.' });
    }

    const { aprovado, motivo } = avaliarPagamento(metodo, dados || {});
    const delay = DELAYS[metodo] ?? 6000;

    // Responde já — o resultado definitivo chega via RabbitMQ depois do "processamento"
    res.status(202).json({ mensagem: 'Pagamento em processamento.', aprovado, motivo, estimativa_ms: delay });

    setTimeout(async () => {
      try {
        if (pagamento_id) {
          await prisma.pagamento
            .update({
              where: { pagamento_id: parseInt(pagamento_id) },
              data: { pagamento_status: aprovado ? 1 : 2 },
            })
            .catch(() => {});
        }
        await publishResultadoPagamento(aprovado, reserva_id, { pagamento_id, motivo });
      } catch (err) {
        console.error('[processar] Erro ao finalizar pagamento:', err.message);
      }
    }, delay);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao processar pagamento.' });
  }
}

async function getAll(req, res) {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ error: 'Acesso negado.' });
  }
  try {
    const pagamentos = await prisma.pagamento.findMany();
    return res.status(200).json(pagamentos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar pagamentos.' });
  }
}

async function getById(req, res) {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ error: 'Acesso negado.' });
  }
  try {
    const { id } = req.params;
    const pagamento = await prisma.pagamento.findUnique({
      where: { pagamento_id: parseInt(id) },
    });

    if (!pagamento) {
      return res.status(404).json({ error: 'Pagamento não encontrado.' });
    }

    return res.status(200).json(pagamento);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar pagamento.' });
  }
}

async function create(req, res) {
  try {
    const { pagamento_tipo, pagamento_status, pagamento_data, pagamento_endereco } = req.body;

    if (!pagamento_tipo || pagamento_status === undefined || !pagamento_data || !pagamento_endereco) {
      return res.status(400).json({ error: 'Campos obrigatórios: pagamento_tipo, pagamento_status, pagamento_data, pagamento_endereco.' });
    }

    const pagamento = await prisma.pagamento.create({
      data: {
        pagamento_tipo,
        pagamento_status: parseInt(pagamento_status),
        pagamento_data: new Date(pagamento_data),
        pagamento_endereco,
      },
    });

    await publishPagamentoEvent('criado', pagamento);

    return res.status(201).json(pagamento);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar pagamento.' });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { pagamento_tipo, pagamento_status, pagamento_data, pagamento_endereco } = req.body;

    const exists = await prisma.pagamento.findUnique({ where: { pagamento_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Pagamento não encontrado.' });

    const pagamento = await prisma.pagamento.update({
      where: { pagamento_id: parseInt(id) },
      data: {
        pagamento_tipo,
        pagamento_status: parseInt(pagamento_status),
        pagamento_data: new Date(pagamento_data),
        pagamento_endereco,
      },
    });

    await publishPagamentoEvent('atualizado', pagamento);

    return res.status(200).json(pagamento);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar pagamento.' });
  }
}

async function patch(req, res) {
  try {
    const { id } = req.params;
    const fields = req.body;

    const exists = await prisma.pagamento.findUnique({ where: { pagamento_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Pagamento não encontrado.' });

    const data = {};
    if (fields.pagamento_tipo !== undefined) data.pagamento_tipo = fields.pagamento_tipo;
    if (fields.pagamento_status !== undefined) data.pagamento_status = parseInt(fields.pagamento_status);
    if (fields.pagamento_data !== undefined) data.pagamento_data = new Date(fields.pagamento_data);
    if (fields.pagamento_endereco !== undefined) data.pagamento_endereco = fields.pagamento_endereco;

    const pagamento = await prisma.pagamento.update({
      where: { pagamento_id: parseInt(id) },
      data,
    });

    await publishPagamentoEvent('atualizado', pagamento);

    return res.status(200).json(pagamento);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar pagamento.' });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;

    const exists = await prisma.pagamento.findUnique({ where: { pagamento_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Pagamento não encontrado.' });

    await prisma.pagamento.delete({ where: { pagamento_id: parseInt(id) } });

    await publishPagamentoEvent('cancelado', { pagamento_id: parseInt(id) });

    return res.status(200).json({ message: 'Pagamento removido com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao remover pagamento.' });
  }
}

module.exports = { getAll, getById, create, update, patch, remove, processar };
