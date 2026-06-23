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
    const { pagamento_id, reserva_id, boleto_id, deposito_id, cartao_id, tipo_pagamento_status } = req.body;

    if (!pagamento_id || !reserva_id || (!boleto_id && !deposito_id && !cartao_id) || tipo_pagamento_status === undefined) {
      return res.status(400).json({ error: 'Campos obrigatórios: pagamento_id, reserva_id, tipo_pagamento_status e ao menos um de boleto_id, deposito_id ou cartao_id.' });
    }

    const data = {
      pagamento_id: parseInt(pagamento_id),
      reserva_id: parseInt(reserva_id),
      tipo_pagamento_status: parseInt(tipo_pagamento_status),
    };

    // Tratativa para aceitar apenas a FK correspondente
    if (boleto_id)   data.boleto_id   = parseInt(boleto_id);
    if (deposito_id) data.deposito_id = parseInt(deposito_id);
    if (cartao_id)   data.cartao_id   = parseInt(cartao_id);

    const tipo = await prisma.tipo_pagamento.create({ data });

    return res.status(201).json(tipo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar tipo de pagamento.' });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { pagamento_id, reserva_id, boleto_id, deposito_id, cartao_id, tipo_pagamento_status } = req.body;

    const exists = await prisma.tipo_pagamento.findUnique({ where: { tipo_pagamento_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Tipo de pagamento não encontrado.' });

    const tipo = await prisma.tipo_pagamento.update({
      where: { tipo_pagamento_id: parseInt(id) },
      data: {
        pagamento_id: pagamento_id !== undefined ? parseInt(pagamento_id) : exists.pagamento_id,
        reserva_id: reserva_id !== undefined ? parseInt(reserva_id) : exists.reserva_id,
        tipo_pagamento_status: tipo_pagamento_status !== undefined ? parseInt(tipo_pagamento_status) : exists.tipo_pagamento_status,
        boleto_id: boleto_id ? parseInt(boleto_id) : null,
        deposito_id: deposito_id ? parseInt(deposito_id) : null,
        cartao_id: cartao_id ? parseInt(cartao_id) : null,
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
    if (fields.boleto_id !== undefined) data.boleto_id = fields.boleto_id ? parseInt(fields.boleto_id) : null;
    if (fields.deposito_id !== undefined) data.deposito_id = fields.deposito_id ? parseInt(fields.deposito_id) : null;
    if (fields.cartao_id !== undefined) data.cartao_id = fields.cartao_id ? parseInt(fields.cartao_id) : null;
    if (fields.reserva_id !== undefined) data.reserva_id = parseInt(fields.reserva_id);
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
