const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/tipoPagamentoController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: TipoPagamento
 *   description: Gerenciamento de tipos de pagamento
 */

/**
 * @swagger
 * /tipo-pagamento:
 *   get:
 *     summary: Lista todos os tipos de pagamento
 *     tags: [TipoPagamento]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tipos de pagamento com relações
 */
router.get('/', auth, ctrl.getAll);

/**
 * @swagger
 * /tipo-pagamento/{id}:
 *   get:
 *     summary: Busca tipo de pagamento por ID
 *     tags: [TipoPagamento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tipo de pagamento encontrado
 *       404:
 *         description: Tipo de pagamento não encontrado
 */
router.get('/:id', auth, ctrl.getById);

/**
 * @swagger
 * /tipo-pagamento:
 *   post:
 *     summary: Cria um novo tipo de pagamento
 *     tags: [TipoPagamento]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [tipo_pagamento_id, pagamento_id, boleto_id, deposito_id, cartao_id, tipo_pagamento_status]
 *             properties:
 *               tipo_pagamento_id:
 *                 type: integer
 *                 example: 1
 *               pagamento_id:
 *                 type: integer
 *                 example: 1
 *               boleto_id:
 *                 type: integer
 *                 example: 1
 *               deposito_id:
 *                 type: integer
 *                 example: 1
 *               cartao_id:
 *                 type: integer
 *                 example: 1
 *               tipo_pagamento_status:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Tipo de pagamento criado
 *       400:
 *         description: Dados inválidos
 */
router.post('/', auth, ctrl.create);

/**
 * @swagger
 * /tipo-pagamento/{id}:
 *   put:
 *     summary: Atualiza todos os campos de um tipo de pagamento
 *     tags: [TipoPagamento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pagamento_id:
 *                 type: integer
 *               boleto_id:
 *                 type: integer
 *               deposito_id:
 *                 type: integer
 *               cartao_id:
 *                 type: integer
 *               tipo_pagamento_status:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Tipo de pagamento atualizado
 *       404:
 *         description: Tipo de pagamento não encontrado
 */
router.put('/:id', auth, ctrl.update);

/**
 * @swagger
 * /tipo-pagamento/{id}:
 *   patch:
 *     summary: Atualiza campos específicos de um tipo de pagamento
 *     tags: [TipoPagamento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pagamento_id:
 *                 type: integer
 *               boleto_id:
 *                 type: integer
 *               deposito_id:
 *                 type: integer
 *               cartao_id:
 *                 type: integer
 *               tipo_pagamento_status:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Tipo de pagamento atualizado parcialmente
 *       404:
 *         description: Tipo de pagamento não encontrado
 */
router.patch('/:id', auth, ctrl.patch);

/**
 * @swagger
 * /tipo-pagamento/{id}:
 *   delete:
 *     summary: Remove um tipo de pagamento
 *     tags: [TipoPagamento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tipo de pagamento removido
 *       404:
 *         description: Tipo de pagamento não encontrado
 */
router.delete('/:id', auth, ctrl.remove);

module.exports = router;
