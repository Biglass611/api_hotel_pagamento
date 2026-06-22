const prisma = require('../config/prismaClient');
const crypto = require('crypto');

function sanitizeCartao(cartao) {
  if (!cartao) return null;
  const { cartao_cvv, ...safe } = cartao;
  return safe;
}

// Nunca armazenar o cartão real: guarda só os últimos 4 dígitos mascarados
// + um hash (fingerprint) do número completo. Coluna cartao_numero é VARCHAR(45).
function mascararNumero(numero) {
  const d = String(numero ?? '').replace(/\D/g, '');
  if (!d) return numero;
  const last4 = d.slice(-4).padStart(4, '*');
  const hash = crypto.createHash('sha256').update(d).digest('hex').slice(0, 12);
  return `**** **** **** ${last4} #${hash}`;
}

// CVV nunca é guardado (boa prática). Coluna é VARCHAR(3) -> grava "***".
const CVV_MASCARADO = '***';

async function getAll(req, res) {
  try {
    const cartoes = await prisma.cartao.findMany();
    return res.status(200).json(cartoes.map(sanitizeCartao));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar cartões.' });
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const cartao = await prisma.cartao.findUnique({
      where: { cartao_id: parseInt(id) },
    });

    if (!cartao) return res.status(404).json({ error: 'Cartão não encontrado.' });

    return res.status(200).json(sanitizeCartao(cartao));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar cartão.' });
  }
}

async function create(req, res) {
  try {
    const { cartao_numero, cartao_validade, cartao_cvv, cartao_banco, cartao_nome, cartao_status } = req.body;

    if (!cartao_numero || !cartao_validade || !cartao_cvv || !cartao_banco || !cartao_nome || cartao_status === undefined) {
      return res.status(400).json({ error: 'Campos obrigatórios: cartao_numero, cartao_validade, cartao_cvv, cartao_banco, cartao_nome, cartao_status.' });
    }

    const cartao = await prisma.cartao.create({
      data: {
        cartao_numero: mascararNumero(cartao_numero),
        cartao_validade: new Date(cartao_validade),
        cartao_cvv: CVV_MASCARADO,
        cartao_banco,
        cartao_nome,
        cartao_status: parseInt(cartao_status),
      },
    });

    return res.status(201).json(sanitizeCartao(cartao));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar cartão.' });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { cartao_numero, cartao_validade, cartao_cvv, cartao_banco, cartao_nome, cartao_status } = req.body;

    const exists = await prisma.cartao.findUnique({ where: { cartao_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Cartão não encontrado.' });

    const cartao = await prisma.cartao.update({
      where: { cartao_id: parseInt(id) },
      data: {
        cartao_numero: mascararNumero(cartao_numero),
        cartao_validade: new Date(cartao_validade),
        cartao_cvv: CVV_MASCARADO,
        cartao_banco,
        cartao_nome,
        cartao_status: parseInt(cartao_status),
      },
    });

    return res.status(200).json(sanitizeCartao(cartao));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar cartão.' });
  }
}

async function patch(req, res) {
  try {
    const { id } = req.params;
    const fields = req.body;

    const exists = await prisma.cartao.findUnique({ where: { cartao_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Cartão não encontrado.' });

    const data = {};
    if (fields.cartao_numero !== undefined) data.cartao_numero = mascararNumero(fields.cartao_numero);
    if (fields.cartao_validade !== undefined) data.cartao_validade = new Date(fields.cartao_validade);
    if (fields.cartao_cvv !== undefined) data.cartao_cvv = CVV_MASCARADO;
    if (fields.cartao_banco !== undefined) data.cartao_banco = fields.cartao_banco;
    if (fields.cartao_nome !== undefined) data.cartao_nome = fields.cartao_nome;
    if (fields.cartao_status !== undefined) data.cartao_status = parseInt(fields.cartao_status);

    const cartao = await prisma.cartao.update({
      where: { cartao_id: parseInt(id) },
      data,
    });

    return res.status(200).json(sanitizeCartao(cartao));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar cartão.' });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;

    const exists = await prisma.cartao.findUnique({ where: { cartao_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Cartão não encontrado.' });

    await prisma.cartao.delete({ where: { cartao_id: parseInt(id) } });

    return res.status(200).json({ message: 'Cartão removido com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao remover cartão.' });
  }
}

module.exports = { getAll, getById, create, update, patch, remove };
