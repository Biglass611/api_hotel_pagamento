const jwt = require('jsonwebtoken');

async function login(req, res) {
  try {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
      return res.status(400).json({ error: 'Campos obrigatórios: usuario, senha.' });
    }

    // Validação simples de credenciais (adaptar conforme módulo de autenticação do grupo)
    if (usuario !== process.env.AUTH_USER || senha !== process.env.AUTH_PASS) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = jwt.sign(
      { usuario },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao realizar login.' });
  }
}

module.exports = { login };
