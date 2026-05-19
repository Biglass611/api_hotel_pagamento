const amqp = require('amqplib');

let connection = null;
let channel = null;

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://admin:admin@10.136.38.50:5672';

async function getChannel() {
  if (channel) return channel;

  try {
    connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    console.log('[RabbitMQ] Conexão estabelecida com sucesso.');
    return channel;
  } catch (error) {
    console.error('[RabbitMQ] Erro ao conectar:', error.message);
    throw error;
  }
}

async function closeConnection() {
  try {
    if (channel) await channel.close();
    if (connection) await connection.close();
    console.log('[RabbitMQ] Conexão encerrada.');
  } catch (error) {
    console.error('[RabbitMQ] Erro ao encerrar conexão:', error.message);
  }
}

module.exports = { getChannel, closeConnection };
