const prisma = require('../config/prismaClient');

async function getAll(req, res) {
  try {
    const tipos = await prisma.tipo_pagamento.findMany({
      include: {
        pagamento: true,
        boleto: true,
        deposito: true,
        cartao: true,
      },
    });
    return res.status(200).json(tipos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar tipos de pagamento.' });
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const tipo = await prisma.tipo_pagamento.findUnique({
      where: { tipo_pagamento_id: parseInt(id) },
      include: {
        pagamento: true,
        boleto: true,
        deposito: true,
        cartao: true,
      },
    });

    if (!tipo) return res.status(404).json({ error: 'Tipo de pagamento não encontrado.' });

    return res.status(200).json(tipo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar tipo de pagamento.' });
  }
}

async function create(req, res) {
  try {
    const { tipo_pagamento_id, pagamento_id, boleto_id, deposito_id, cartao_id, tipo_pagamento_status } = req.body;

    if (!tipo_pagamento_id || !pagamento_id || !boleto_id || !deposito_id || !cartao_id || tipo_pagamento_status === undefined) {
      return res.status(400).json({ error: 'Campos obrigatórios: tipo_pagamento_id, pagamento_id, boleto_id, deposito_id, cartao_id, tipo_pagamento_status.' });
    }

    const tipo = await prisma.tipo_pagamento.create({
      data: {
        tipo_pagamento_id: parseInt(tipo_pagamento_id),
        pagamento_id: parseInt(pagamento_id),
        boleto_id: parseInt(boleto_id),
        deposito_id: parseInt(deposito_id),
        cartao_id: parseInt(cartao_id),
        tipo_pagamento_status: parseInt(tipo_pagamento_status),
      },
    });

    return res.status(201).json(tipo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar tipo de pagamento.' });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { pagamento_id, boleto_id, deposito_id, cartao_id, tipo_pagamento_status } = req.body;

    const exists = await prisma.tipo_pagamento.findUnique({ where: { tipo_pagamento_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Tipo de pagamento não encontrado.' });

    const tipo = await prisma.tipo_pagamento.update({
      where: { tipo_pagamento_id: parseInt(id) },
      data: {
        pagamento_id: parseInt(pagamento_id),
        boleto_id: parseInt(boleto_id),
        deposito_id: parseInt(deposito_id),
        cartao_id: parseInt(cartao_id),
        tipo_pagamento_status: parseInt(tipo_pagamento_status),
      },
    });

    return res.status(200).json(tipo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar tipo de pagamento.' });
  }
}

async function patch(req, res) {
  try {
    const { id } = req.params;
    const fields = req.body;

    const exists = await prisma.tipo_pagamento.findUnique({ where: { tipo_pagamento_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Tipo de pagamento não encontrado.' });

    const data = {};
    if (fields.pagamento_id !== undefined) data.pagamento_id = parseInt(fields.pagamento_id);
    if (fields.boleto_id !== undefined) data.boleto_id = parseInt(fields.boleto_id);
    if (fields.deposito_id !== undefined) data.deposito_id = parseInt(fields.deposito_id);
    if (fields.cartao_id !== undefined) data.cartao_id = parseInt(fields.cartao_id);
    if (fields.tipo_pagamento_status !== undefined) data.tipo_pagamento_status = parseInt(fields.tipo_pagamento_status);

    const tipo = await prisma.tipo_pagamento.update({
      where: { tipo_pagamento_id: parseInt(id) },
      data,
    });

    return res.status(200).json(tipo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar tipo de pagamento.' });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;

    const exists = await prisma.tipo_pagamento.findUnique({ where: { tipo_pagamento_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Tipo de pagamento não encontrado.' });

    await prisma.tipo_pagamento.delete({ where: { tipo_pagamento_id: parseInt(id) } });

    return res.status(200).json({ message: 'Tipo de pagamento removido com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao remover tipo de pagamento.' });
  }
}

module.exports = { getAll, getById, create, update, patch, remove };
