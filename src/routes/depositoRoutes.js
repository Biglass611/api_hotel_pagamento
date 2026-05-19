const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/depositoController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Depositos
 *   description: Gerenciamento de depósitos
 */

/**
 * @swagger
 * /depositos:
 *   get:
 *     summary: Lista todos os depósitos
 *     tags: [Depositos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de depósitos
 */
router.get('/', auth, ctrl.getAll);

/**
 * @swagger
 * /depositos/{id}:
 *   get:
 *     summary: Busca depósito por ID
 *     tags: [Depositos]
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
 *         description: Depósito encontrado
 *       404:
 *         description: Depósito não encontrado
 */
router.get('/:id', auth, ctrl.getById);

/**
 * @swagger
 * /depositos:
 *   post:
 *     summary: Cria um novo depósito
 *     tags: [Depositos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [deposito_id, deposito_banco, deposito_valor, deposito_agencia, deposito_conta, deposito_status]
 *             properties:
 *               deposito_id:
 *                 type: integer
 *                 example: 1
 *               deposito_banco:
 *                 type: string
 *                 example: "Banco do Brasil"
 *               deposito_valor:
 *                 type: number
 *                 example: 350.00
 *               deposito_agencia:
 *                 type: string
 *                 example: "0001"
 *               deposito_conta:
 *                 type: string
 *                 example: "12345-6"
 *               deposito_status:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Depósito criado
 *       400:
 *         description: Dados inválidos
 */
router.post('/', auth, ctrl.create);

/**
 * @swagger
 * /depositos/{id}:
 *   put:
 *     summary: Atualiza todos os campos de um depósito
 *     tags: [Depositos]
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
 *               deposito_banco:
 *                 type: string
 *               deposito_valor:
 *                 type: number
 *               deposito_agencia:
 *                 type: string
 *               deposito_conta:
 *                 type: string
 *               deposito_status:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Depósito atualizado
 *       404:
 *         description: Depósito não encontrado
 */
router.put('/:id', auth, ctrl.update);

/**
 * @swagger
 * /depositos/{id}:
 *   patch:
 *     summary: Atualiza campos específicos de um depósito
 *     tags: [Depositos]
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
 *               deposito_banco:
 *                 type: string
 *               deposito_valor:
 *                 type: number
 *               deposito_agencia:
 *                 type: string
 *               deposito_conta:
 *                 type: string
 *               deposito_status:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Depósito atualizado parcialmente
 *       404:
 *         description: Depósito não encontrado
 */
router.patch('/:id', auth, ctrl.patch);

/**
 * @swagger
 * /depositos/{id}:
 *   delete:
 *     summary: Remove um depósito
 *     tags: [Depositos]
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
 *         description: Depósito removido
 *       404:
 *         description: Depósito não encontrado
 */
router.delete('/:id', auth, ctrl.remove);

module.exports = router;
