const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/cartaoController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Cartoes
 *   description: Gerenciamento de cartões (CVV nunca retornado nas respostas)
 */

/**
 * @swagger
 * /cartoes:
 *   get:
 *     summary: Lista todos os cartões
 *     tags: [Cartoes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de cartões (sem CVV)
 */
router.get('/', auth, ctrl.getAll);

/**
 * @swagger
 * /cartoes/{id}:
 *   get:
 *     summary: Busca cartão por ID
 *     tags: [Cartoes]
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
 *         description: Cartão encontrado (sem CVV)
 *       404:
 *         description: Cartão não encontrado
 */
router.get('/:id', auth, ctrl.getById);

/**
 * @swagger
 * /cartoes:
 *   post:
 *     summary: Cadastra um novo cartão
 *     tags: [Cartoes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [cartao_numero, cartao_validade, cartao_cvv, cartao_banco, cartao_nome, cartao_status]
 *             properties:
 *               cartao_numero:
 *                 type: string
 *                 example: "4111111111111111"
 *               cartao_validade:
 *                 type: string
 *                 format: date-time
 *                 example: "2027-12-01T00:00:00"
 *               cartao_cvv:
 *                 type: string
 *                 example: "123"
 *               cartao_banco:
 *                 type: string
 *                 example: "Nubank"
 *               cartao_nome:
 *                 type: string
 *                 example: "JOAO DA SILVA"
 *               cartao_status:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Cartão cadastrado (sem CVV na resposta)
 *       400:
 *         description: Dados inválidos
 */
router.post('/', auth, ctrl.create);

/**
 * @swagger
 * /cartoes/{id}:
 *   put:
 *     summary: Atualiza todos os campos de um cartão
 *     tags: [Cartoes]
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
 *               cartao_numero:
 *                 type: string
 *               cartao_validade:
 *                 type: string
 *                 format: date-time
 *               cartao_cvv:
 *                 type: string
 *               cartao_banco:
 *                 type: string
 *               cartao_nome:
 *                 type: string
 *               cartao_status:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cartão atualizado (sem CVV na resposta)
 *       404:
 *         description: Cartão não encontrado
 */
router.put('/:id', auth, ctrl.update);

/**
 * @swagger
 * /cartoes/{id}:
 *   patch:
 *     summary: Atualiza campos específicos de um cartão
 *     tags: [Cartoes]
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
 *               cartao_numero:
 *                 type: string
 *               cartao_validade:
 *                 type: string
 *                 format: date-time
 *               cartao_cvv:
 *                 type: string
 *               cartao_banco:
 *                 type: string
 *               cartao_nome:
 *                 type: string
 *               cartao_status:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cartão atualizado parcialmente (sem CVV na resposta)
 *       404:
 *         description: Cartão não encontrado
 */
router.patch('/:id', auth, ctrl.patch);

/**
 * @swagger
 * /cartoes/{id}:
 *   delete:
 *     summary: Remove um cartão
 *     tags: [Cartoes]
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
 *         description: Cartão removido
 *       404:
 *         description: Cartão não encontrado
 */
router.delete('/:id', auth, ctrl.remove);

module.exports = router;
