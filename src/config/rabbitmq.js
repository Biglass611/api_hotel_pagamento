const amqp = require('amqplib');

let channel;

async function connectRabbitMQ() {
    try {
        const url = process.env.RABBITMQ_URL || 'amqp://localhost';
        
        // 1. Conecta ao servidor RabbitMQ
        const connection = await amqp.connect(url);
        
        // 2. Cria o canal de comunicação
        channel = await connection.createChannel();
        
        // 3. Configurações de infraestrutura
        const exchange = 'reserva_events';
        const filaPagamento = 'fila_pagamento';

        // Garante que o Exchange (tipo fanout) existe
        await channel.assertExchange(exchange, 'fanout', { durable: false });
        
        // Garante que a fila existe
        await channel.assertQueue(filaPagamento, { durable: true });
        
        // 4. A LIGAÇÃO (BIND) - ESSENCIAL
        // Tudo o que chegar no reserva_events é copiado para a fila_pagamento
        await channel.bindQueue(filaPagamento, exchange, '');
        
        console.log('[RabbitMQ] Conectado com sucesso 🚀');

        // 5. Consumir a mensagem da fila imediatamente após conectar
        channel.consume(filaPagamento, (msg) => {
            if (msg !== null) {
                console.log("[RabbitMQ] Mensagem recebida na fila de pagamento:", msg.content.toString());
                
                // Aqui você pode chamar o seu controller ou lógica para salvar no banco
                
                // Confirma pro RabbitMQ que a mensagem foi processada com sucesso
                channel.ack(msg);
            }
        });

        console.log('[RabbitMQ] Consumidor ativo. Aguardando mensagens...');

    } catch (error) {
        console.error('[RabbitMQ] Erro na conexão:', error.message);
    }
}

function getChannel() {
    return channel;
}

module.exports = {
    connectRabbitMQ,
    getChannel
};