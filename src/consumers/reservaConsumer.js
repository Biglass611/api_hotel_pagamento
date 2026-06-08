const { getChannel } = require('../config/rabbitmq');
// Correção: Apontando para o nome real do arquivo na pasta config
const prisma = require('../config/prismaClient');

const iniciarConsumerReserva = async () => {
    try {
        const canal = getChannel();
        if (!canal) throw new Error('Canal RabbitMQ não disponível para ReservaConsumer.');

        const nomeFila = 'reserva_status'; 
        
        await canal.assertQueue(nomeFila, { durable: true });

        console.log(`🎧 [Consumer] A escutar eventos na fila '${nomeFila}'...`);

        canal.consume(nomeFila, async (mensagem) => {
            if (mensagem !== null) {
                const dadosReserva = JSON.parse(mensagem.content.toString());
                
                console.log(`📥 [Consumer] Recebida confirmação de reserva:`, dadosReserva);

                try {
                    const novoPagamento = await prisma.pagamento.create({
                        data: {
                            pagamento_tipo: dadosReserva.tipo_pagamento || 'A DEFINIR', 
                            pagamento_status: 0, 
                            pagamento_data: new Date(),
                            pagamento_endereco: dadosReserva.endereco || 'Endereço não informado'
                        }
                    });

                    console.log(`✅ [Consumer] Pagamento ID ${novoPagamento.pagamento_id} gerado com sucesso!`);
                    
                    canal.ack(mensagem);
                } catch (erroPrisma) {
                    console.error(`❌ [Consumer] Erro ao salvar pagamento no banco de dados:`, erroPrisma.message);
                    canal.nack(mensagem, false, false); 
                }
            }
        });
    } catch (erro) {
        console.error('❌ Erro ao iniciar o Consumer de Reserva:', erro.message);
    }
};

module.exports = { iniciarConsumerReserva };