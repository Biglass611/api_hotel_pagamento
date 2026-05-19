require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const { startPagamentoConsumer } = require('./consumers/pagamentoConsumer');

// Routes
const authRoutes = require('./routes/authRoutes');
const pagamentoRoutes = require('./routes/pagamentoRoutes');
const boletoRoutes = require('./routes/boletoRoutes');
const depositoRoutes = require('./routes/depositoRoutes');
const cartaoRoutes = require('./routes/cartaoRoutes');
const tipoPagamentoRoutes = require('./routes/tipoPagamentoRoutes');

const app = express();
const PORT = process.env.PORT || 9534;
const BASE = '/hotel/pagamento';

// Middlewares globais
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger
app.use(`${BASE}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
app.use(`${BASE}/auth`, authRoutes);
app.use(`${BASE}/pagamentos`, pagamentoRoutes);
app.use(`${BASE}/boletos`, boletoRoutes);
app.use(`${BASE}/depositos`, depositoRoutes);
app.use(`${BASE}/cartoes`, cartaoRoutes);
app.use(`${BASE}/tipo-pagamento`, tipoPagamentoRoutes);

// Health check
app.get(BASE, (req, res) => {
  res.status(200).json({
    service: 'Hotel Pagamento API',
    status: 'online',
    docs: `${BASE}/api-docs`,
    version: '1.0.0',
  });
});

// Inicia RabbitMQ Consumer (não bloqueia a API em caso de falha)
startPagamentoConsumer().catch((err) => {
  console.warn('[RabbitMQ] Consumer não iniciado:', err.message);
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`[Server] Hotel Pagamento API rodando na porta ${PORT}`);
  console.log(`[Server] Base path: http://localhost:${PORT}${BASE}`);
  console.log(`[Swagger] Documentação disponível em http://localhost:${PORT}${BASE}/api-docs`);
});

module.exports = app;
