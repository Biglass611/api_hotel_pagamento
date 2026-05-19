const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/boletoController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Boletos
 *   description: Gerenciamento de boletos
 */

/**
 * @swagger
 * /boletos:
 *   get:
 *     summary: Lista todos os boletos
 *     tags: [Boletos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de boletos
 */
router.get('/', auth, ctrl.getAll);

/**
 * @swagger
 * /boletos/{id}:
 *   get:
 *     summary: Busca boleto por ID
 *     tags: [Boletos]
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
 *         description: Boleto encontrado
 *       404:
 *         description: Boleto não encontrado
 */
router.get('/:id', auth, ctrl.getById);

/**
 * @swagger
 * /boletos:
 *   post:
 *     summary: Cria um novo boleto
 *     tags: [Boletos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [boleto_id, boleto_numero, boleto_vencimento, boleto_emissao, boleto_status]
 *             properties:
 *               boleto_id:
 *                 type: integer
 *                 example: 1
 *               boleto_numero:
 *                 type: string
 *                 example: "34191.75009 01237.961236 61980.260008 1 10100000017000"
 *               boleto_vencimento:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-02-01T00:00:00"
 *               boleto_emissao:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-01-01T00:00:00"
 *               boleto_status:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Boleto criado
 */
router.post('/', auth, ctrl.create);

/**
 * @swagger
 * /boletos/{id}:
 *   put:
 *     summary: Atualiza todos os campos de um boleto
 *     tags: [Boletos]
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
 *               boleto_numero:
 *                 type: string
 *               boleto_vencimento:
 *                 type: string
 *                 format: date-time
 *               boleto_emissao:
 *                 type: string
 *                 format: date-time
 *               boleto_status:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Boleto atualizado
 */
router.put('/:id', auth, ctrl.update);

/**
 * @swagger
 * /boletos/{id}:
 *   patch:
 *     summary: Atualiza campos específicos de um boleto
 *     tags: [Boletos]
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
 *               boleto_numero:
 *                 type: string
 *               boleto_vencimento:
 *                 type: string
 *                 format: date-time
 *               boleto_emissao:
 *                 type: string
 *                 format: date-time
 *               boleto_status:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Boleto atualizado
 */
router.patch('/:id', auth, ctrl.patch);

/**
 * @swagger
 * /boletos/{id}:
 *   delete:
 *     summary: Remove um boleto
 *     tags: [Boletos]
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
 *         description: Boleto removido
 */
router.delete('/:id', auth, ctrl.remove);

module.exports = router;
