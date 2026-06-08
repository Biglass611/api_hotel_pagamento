require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

// Importações do RabbitMQ e Consumidores
const { connectRabbitMQ } = require('./config/rabbitmq');
const { startPagamentoConsumer } = require('./consumers/pagamentoConsumer');
const { iniciarConsumerReserva } = require('./consumers/reservaConsumer');
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

// Middlewares globais
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customSiteTitle: 'Hotel Pagamento API' }));

// Rotas
app.use('/auth', authRoutes);
app.use('/pagamentos', pagamentoRoutes);
app.use('/boletos', boletoRoutes);
app.use('/depositos', depositoRoutes);
app.use('/cartoes', cartaoRoutes);
app.use('/tipo-pagamento', tipoPagamentoRoutes);

// Health check
app.get('/', (req, res) => {
  res.status(200).json({
    service: 'Hotel Pagamento API',
    status: 'online',
    docs: '/api-docs',
    version: '1.0.0',
  });
});

// Orquestração de inicialização do RabbitMQ e Consumers
async function iniciarServicos() {
  try {
    await connectRabbitMQ();
    await startPagamentoConsumer();
    await iniciarConsumerReserva();
    await iniciarConsumidorCliente(); 
    console.log(`🚀 Todos os serviços de mensageria estão ativos!`);
  } catch (err) {
    console.warn('[Server] Serviços de mensageria não foram iniciados:', err.message);
  }
}

iniciarServicos();

app.listen(PORT, () => {
  console.log(`[Server] Hotel Pagamento API rodando na porta ${PORT}`);
  console.log(`[Server] Produção: http://academico3.rj.senac.br/20261prj5/hotel/pagamento`);
  console.log(`[Swagger] Docs: http://academico3.rj.senac.br/20261prj5/hotel/pagamento/api-docs`);
});

module.exports = app;