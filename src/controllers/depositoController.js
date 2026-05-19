const prisma = require('../config/prismaClient');

async function getAll(req, res) {
  try {
    const depositos = await prisma.deposito.findMany();
    return res.status(200).json(depositos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar depósitos.' });
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const deposito = await prisma.deposito.findUnique({
      where: { deposito_id: parseInt(id) },
    });

    if (!deposito) return res.status(404).json({ error: 'Depósito não encontrado.' });

    return res.status(200).json(deposito);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar depósito.' });
  }
}

async function create(req, res) {
  try {
    const { deposito_id, deposito_banco, deposito_valor, deposito_agencia, deposito_conta, deposito_status } = req.body;

    if (!deposito_id || !deposito_banco || deposito_valor === undefined || !deposito_agencia || !deposito_conta || deposito_status === undefined) {
      return res.status(400).json({ error: 'Campos obrigatórios: deposito_id, deposito_banco, deposito_valor, deposito_agencia, deposito_conta, deposito_status.' });
    }

    const deposito = await prisma.deposito.create({
      data: {
        deposito_id: parseInt(deposito_id),
        deposito_banco,
        deposito_valor: parseFloat(deposito_valor),
        deposito_agencia,
        deposito_conta,
        deposito_status: parseInt(deposito_status),
      },
    });

    return res.status(201).json(deposito);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar depósito.' });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { deposito_banco, deposito_valor, deposito_agencia, deposito_conta, deposito_status } = req.body;

    const exists = await prisma.deposito.findUnique({ where: { deposito_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Depósito não encontrado.' });

    const deposito = await prisma.deposito.update({
      where: { deposito_id: parseInt(id) },
      data: {
        deposito_banco,
        deposito_valor: parseFloat(deposito_valor),
        deposito_agencia,
        deposito_conta,
        deposito_status: parseInt(deposito_status),
      },
    });

    return res.status(200).json(deposito);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar depósito.' });
  }
}

async function patch(req, res) {
  try {
    const { id } = req.params;
    const fields = req.body;

    const exists = await prisma.deposito.findUnique({ where: { deposito_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Depósito não encontrado.' });

    const data = {};
    if (fields.deposito_banco !== undefined) data.deposito_banco = fields.deposito_banco;
    if (fields.deposito_valor !== undefined) data.deposito_valor = parseFloat(fields.deposito_valor);
    if (fields.deposito_agencia !== undefined) data.deposito_agencia = fields.deposito_agencia;
    if (fields.deposito_conta !== undefined) data.deposito_conta = fields.deposito_conta;
    if (fields.deposito_status !== undefined) data.deposito_status = parseInt(fields.deposito_status);

    const deposito = await prisma.deposito.update({
      where: { deposito_id: parseInt(id) },
      data,
    });

    return res.status(200).json(deposito);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar depósito.' });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;

    const exists = await prisma.deposito.findUnique({ where: { deposito_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Depósito não encontrado.' });

    await prisma.deposito.delete({ where: { deposito_id: parseInt(id) } });

    return res.status(200).json({ message: 'Depósito removido com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao remover depósito.' });
  }
}

module.exports = { getAll, getById, create, update, patch, remove };
