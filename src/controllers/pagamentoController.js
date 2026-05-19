const prisma = require('../config/prismaClient');
const { publishPagamentoEvent } = require('../producers/pagamentoProducer');

async function getAll(req, res) {
  try {
    const pagamentos = await prisma.pagamento.findMany();
    return res.status(200).json(pagamentos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar pagamentos.' });
  }
}

async function getById(req, res) {
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

module.exports = { getAll, getById, create, update, patch, remove };
