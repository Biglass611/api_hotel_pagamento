const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authController');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticação e geração de token JWT
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza login e retorna token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [usuario, senha]
 *             properties:
 *               usuario:
 *                 type: string
 *                 example: "admin"
 *               senha:
 *                 type: string
 *                 example: "admin123"
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Campos obrigatórios ausentes
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', ctrl.login);

module.exports = router;
