const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hotel Pagamento API',
      version: '1.0.0',
      description: 'Módulo de Pagamentos - Sistema de Hotelaria Acadêmico',
    },
    servers: [
      {
        url: `http://academico3.rj.senac.br/hotel/pagamento`,
        description: 'Servidor da faculdade',
      },
      {
        url: `http://localhost:${process.env.PORT || 9534}/hotel/pagamento`,
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./src/routes/*.js', './src/docs/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
