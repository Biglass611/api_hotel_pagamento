const { getChannel } = require('../config/rabbitmq');

const EXCHANGE = 'pagamento_events';

async function publishPagamentoEvent(eventType, data) {
  try {
    const channel = await getChannel();

    await channel.assertExchange(EXCHANGE, 'topic', { durable: true });

    const routingKey = `pagamento.${eventType}`;
    const message = JSON.stringify({ event: eventType, data, timestamp: new Date().toISOString() });

    channel.publish(EXCHANGE, routingKey, Buffer.from(message), { persistent: true });

    console.log(`[Producer] Evento publicado: ${routingKey}`);
  } catch (error) {
    console.error('[Producer] Erro ao publicar evento:', error.message);
  }
}

module.exports = { publishPagamentoEvent };
