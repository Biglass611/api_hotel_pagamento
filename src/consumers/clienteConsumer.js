const { getChannel } = require('../config/rabbitmq');
// MUDANÇA AQUI: Apontando para prismaClient.js
const prisma = require('../config/prismaClient');

const iniciarConsumidorCliente = async () => {
    try {
        const channel = getChannel();
        
        const fila = 'cliente_criado'; 

        await channel.assertQueue(fila);
        console.log(`[Consumer] 🎧 Aguardando eventos na fila '${fila}'...`);

        channel.consume(fila, async (msg) => {
            if (msg !== null) {
                const dadosEvento = JSON.parse(msg.content.toString());
                
                // MUDAR AQUI: Imprime o JSON inteiro para você inspecionar!
                console.log(`[Consumer] 🕵️ DADOS COMPLETOS DO CLIENTE:`, dadosEvento);

                try {
                    // ... resto do seu código
                    // Se o cliente excluir a conta
                    if (dadosEvento.evento === 'CLIENTE_REMOVIDO') {
                        
                        // ATENÇÃO: Essa lógica abaixo é do microsserviço de Reservas.
                        // Como você é do Pagamento, precisa adaptar para a sua realidade.
                        // Exemplo: Atualizar os pagamentos pendentes desse cliente para "Cancelado".
                        /* await prisma.reserva.updateMany({
                            where: { cliente_id: dadosEvento.id },
                            data: { cliente_id: null }
                        });
                        */
                        console.log(`🗑️ Cliente ${dadosEvento.id} removido. Ação de pagamento a ser definida.`);
                    }

                    channel.ack(msg);

                } catch (dbError) {
                    console.error("Erro ao atualizar o banco de dados (Cliente):", dbError);
                }
            }
        });
    } catch (error) {
        console.error('[Consumer] Erro ao iniciar o consumidor de Cliente:', error);
    }
};

module.exports = {
    iniciarConsumidorCliente
};