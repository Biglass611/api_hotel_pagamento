const amqp = require('amqplib');

let channel;

async function connectRabbitMQ() {
    try {
        const url = process.env.RABBITMQ_URL || 'amqp://localhost';
        const connection = await amqp.connect(url);
        
        channel = await connection.createChannel();
        
        // Garante a criação da fila base
        await channel.assertQueue('reserva_status', { durable: true });
        
        console.log('[RabbitMQ] Conectado com sucesso');
    } catch (error) {
        console.error('[RabbitMQ] Erro na conexão:', error.message);
        throw error;
    }
}

function getChannel() {
    return channel;
}

module.exports = {
    connectRabbitMQ,
    getChannel
};