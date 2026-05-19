const prisma = require('../config/prismaClient');

async function getAll(req, res) {
  try {
    const boletos = await prisma.boleto.findMany();
    return res.status(200).json(boletos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar boletos.' });
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const boleto = await prisma.boleto.findUnique({
      where: { boleto_id: parseInt(id) },
    });

    if (!boleto) return res.status(404).json({ error: 'Boleto não encontrado.' });

    return res.status(200).json(boleto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar boleto.' });
  }
}

async function create(req, res) {
  try {
    const { boleto_id, boleto_numero, boleto_vencimento, boleto_emissao, boleto_status } = req.body;

    if (!boleto_id || !boleto_numero || !boleto_vencimento || !boleto_emissao || boleto_status === undefined) {
      return res.status(400).json({ error: 'Campos obrigatórios: boleto_id, boleto_numero, boleto_vencimento, boleto_emissao, boleto_status.' });
    }

    const boleto = await prisma.boleto.create({
      data: {
        boleto_id: parseInt(boleto_id),
        boleto_numero,
        boleto_vencimento: new Date(boleto_vencimento),
        boleto_emissao: new Date(boleto_emissao),
        boleto_status: parseInt(boleto_status),
      },
    });

    return res.status(201).json(boleto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar boleto.' });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { boleto_numero, boleto_vencimento, boleto_emissao, boleto_status } = req.body;

    const exists = await prisma.boleto.findUnique({ where: { boleto_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Boleto não encontrado.' });

    const boleto = await prisma.boleto.update({
      where: { boleto_id: parseInt(id) },
      data: {
        boleto_numero,
        boleto_vencimento: new Date(boleto_vencimento),
        boleto_emissao: new Date(boleto_emissao),
        boleto_status: parseInt(boleto_status),
      },
    });

    return res.status(200).json(boleto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar boleto.' });
  }
}

async function patch(req, res) {
  try {
    const { id } = req.params;
    const fields = req.body;

    const exists = await prisma.boleto.findUnique({ where: { boleto_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Boleto não encontrado.' });

    const data = {};
    if (fields.boleto_numero !== undefined) data.boleto_numero = fields.boleto_numero;
    if (fields.boleto_vencimento !== undefined) data.boleto_vencimento = new Date(fields.boleto_vencimento);
    if (fields.boleto_emissao !== undefined) data.boleto_emissao = new Date(fields.boleto_emissao);
    if (fields.boleto_status !== undefined) data.boleto_status = parseInt(fields.boleto_status);

    const boleto = await prisma.boleto.update({
      where: { boleto_id: parseInt(id) },
      data,
    });

    return res.status(200).json(boleto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar boleto.' });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;

    const exists = await prisma.boleto.findUnique({ where: { boleto_id: parseInt(id) } });
    if (!exists) return res.status(404).json({ error: 'Boleto não encontrado.' });

    await prisma.boleto.delete({ where: { boleto_id: parseInt(id) } });

    return res.status(200).json({ message: 'Boleto removido com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao remover boleto.' });
  }
}

module.exports = { getAll, getById, create, update, patch, remove };
