require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

// Importações do RabbitMQ e Consumidores
const { connectRabbitMQ } = require('./config/rabbitmq');
const { startPagamentoConsumer } = require('./consumers/pagamentoConsumer');
const { iniciarConsumerReserva } = require('./consumers/reservaConsumer');
// NOVA LINHA: Importando o consumidor de cliente do seu amigo
const { iniciarConsumidorCliente } = require('./consumers/clienteConsumer'); 

// Routes
const authRoutes = require('./routes/authRoutes');
const pagamentoRoutes = require('./routes/pagamentoRoutes');
const boletoRoutes = require('./routes/boletoRoutes');
const depositoRoutes = require('./routes/depositoRoutes');
const cartaoRoutes = require('./routes/cartaoRoutes');
const tipoPagamentoRoutes = require('./routes/tipoPagamentoRoutes');

const app = express();
const PORT = process.env.PORT || 9534;

// Alteração da rota base para incluir o prefixo do ambiente acadêmico
const BASE = '/20261prj5/hotel/pagamento';

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

// Orquestração de inicialização do RabbitMQ e Consumers
async function iniciarServicos() {
  try {
    await connectRabbitMQ();
    await startPagamentoConsumer();
    await iniciarConsumerReserva();
    // NOVA LINHA: Iniciando o consumidor de cliente
    await iniciarConsumidorCliente(); 
    
    console.log(`🚀 Todos os serviços de mensageria estão ativos!`);
  } catch (err) {
    console.warn('[Server] Serviços de mensageria não foram iniciados:', err.message);
  }
}

// Inicia RabbitMQ
iniciarServicos();

// Inicia servidor
app.listen(PORT, () => {
  console.log(`[Server] Hotel Pagamento API rodando na porta ${PORT}`);
  console.log(`[Server] Base path local: http://localhost:${PORT}${BASE}`);
  console.log(`[Server] URL de Produção: http://academico3.rj.senac.br${BASE}`);
  console.log(`[Swagger] Documentação disponível em: http://academico3.rj.senac.br${BASE}/api-docs`);
});

module.exports = app;