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

/**
 * Publica o resultado de um pagamento DIRETO na fila que o MS Reserva consome
 * (`pagamento_queue`). Usa sendToQueue (sem exchange) para garantir entrega ao
 * consumer existente, que espera o shape { evento, reserva_id }.
 */
async function publishResultadoPagamento(aprovado, reservaId, extra = {}) {
  try {
    const channel = await getChannel();
    if (!channel) {
      console.error('[Producer] Canal RabbitMQ indisponível para resultado de pagamento.');
      return;
    }

    const fila = 'pagamento_queue';
    await channel.assertQueue(fila, { durable: true });

    const evento = aprovado ? 'PAGAMENTO_APROVADO' : 'PAGAMENTO_RECUSADO';
    const payload = { evento, reserva_id: parseInt(reservaId), ...extra };

    channel.sendToQueue(fila, Buffer.from(JSON.stringify(payload)), { persistent: true });
    console.log(`[Producer] -> ${fila}: ${evento} (reserva ${reservaId})`);
  } catch (error) {
    console.error('[Producer] Erro ao publicar resultado de pagamento:', error.message);
  }
}

module.exports = { publishPagamentoEvent, publishResultadoPagamento };
