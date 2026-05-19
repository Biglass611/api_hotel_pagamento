const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/pagamentoController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Pagamentos
 *   description: Gerenciamento de pagamentos
 */

/**
 * @swagger
 * /pagamentos:
 *   get:
 *     summary: Lista todos os pagamentos
 *     tags: [Pagamentos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pagamentos
 */
router.get('/', auth, ctrl.getAll);

/**
 * @swagger
 * /pagamentos/{id}:
 *   get:
 *     summary: Busca pagamento por ID
 *     tags: [Pagamentos]
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
 *         description: Pagamento encontrado
 *       404:
 *         description: Pagamento não encontrado
 */
router.get('/:id', auth, ctrl.getById);

/**
 * @swagger
 * /pagamentos:
 *   post:
 *     summary: Cria um novo pagamento
 *     tags: [Pagamentos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [pagamento_tipo, pagamento_status, pagamento_data, pagamento_endereco]
 *             properties:
 *               pagamento_tipo:
 *                 type: string
 *                 example: "cartao"
 *               pagamento_status:
 *                 type: integer
 *                 example: 1
 *               pagamento_data:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-01-01T10:00:00"
 *               pagamento_endereco:
 *                 type: string
 *                 example: "Rua das Flores, 123"
 *     responses:
 *       201:
 *         description: Pagamento criado
 *       400:
 *         description: Dados inválidos
 */
router.post('/', auth, ctrl.create);

/**
 * @swagger
 * /pagamentos/{id}:
 *   put:
 *     summary: Atualiza todos os campos de um pagamento
 *     tags: [Pagamentos]
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
 *               pagamento_tipo:
 *                 type: string
 *               pagamento_status:
 *                 type: integer
 *               pagamento_data:
 *                 type: string
 *                 format: date-time
 *               pagamento_endereco:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pagamento atualizado
 *       404:
 *         description: Pagamento não encontrado
 */
router.put('/:id', auth, ctrl.update);

/**
 * @swagger
 * /pagamentos/{id}:
 *   patch:
 *     summary: Atualiza campos específicos de um pagamento
 *     tags: [Pagamentos]
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
 *               pagamento_tipo:
 *                 type: string
 *               pagamento_status:
 *                 type: integer
 *               pagamento_data:
 *                 type: string
 *                 format: date-time
 *               pagamento_endereco:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pagamento atualizado
 *       404:
 *         description: Pagamento não encontrado
 */
router.patch('/:id', auth, ctrl.patch);

/**
 * @swagger
 * /pagamentos/{id}:
 *   delete:
 *     summary: Remove um pagamento
 *     tags: [Pagamentos]
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
 *         description: Pagamento removido
 *       404:
 *         description: Pagamento não encontrado
 */
router.delete('/:id', auth, ctrl.remove);

module.exports = router;
