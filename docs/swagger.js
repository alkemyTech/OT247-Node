const swaggerJSDoc = require('swagger-jsdoc');
const schemasSwagger = require('./schemasSwagger');
const pathsSwagger = require('./paths');

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'ONG Team-247 - Node',
    description: 'API to manage an ONG',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
  tags: [
    {
      name: 'example',
      description: 'This is an example tag',
    },
  ],
  paths: pathsSwagger,
  components: {
    schemas: schemasSwagger,
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
  },
};

const swaggerOptions = {
  swaggerDefinition,
  apis: [],
};

module.exports = swaggerJSDoc(swaggerOptions);
