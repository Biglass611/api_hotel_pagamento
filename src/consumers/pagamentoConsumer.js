const { getChannel } = require('../config/rabbitmq');

const EXCHANGE = 'pagamento_events';
const QUEUE = 'pagamento_queue';

async function startPagamentoConsumer() {
  try {
    const channel = await getChannel();

    await channel.assertExchange(EXCHANGE, 'topic', { durable: true });
    await channel.assertQueue(QUEUE, { durable: true });
    await channel.bindQueue(QUEUE, EXCHANGE, 'pagamento.*');

    console.log(`[Consumer] Aguardando mensagens na fila: ${QUEUE}`);

    channel.consume(QUEUE, (msg) => {
      if (msg !== null) {
        const content = JSON.parse(msg.content.toString());
        console.log(`[Consumer] Evento recebido: ${content.event}`, content.data);
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error('[Consumer] Erro ao iniciar consumidor:', error.message);
  }
}

module.exports = { startPagamentoConsumer };
