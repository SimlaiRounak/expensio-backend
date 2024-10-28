require('dotenv').config();
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const serverRoutes = require('./src/routes');

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
const protocol = process.env.NODE_ENV === 'LOCAL' ? 'http' : 'https';
const specs = swaggerJsdoc({
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Expensio API Documentation',
      version: '1.0.0',
      description:
        'Official Documentation of Backend APIs of Expensio',
    },
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'X-AUTH-TOKEN'
        }
      }
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'LOCAL' ? `${protocol}://${host}:${port}/api` : `${protocol}://${host}/api`,
      },
    ],
  },
  apis: ['./src/routes/*.js'],
});

const swaggerBasicAuth = basicAuth({ challenge: true, users: { [process.env.SWAGGER_UNAME]: process.env.SWAGGER_PASSWORD } });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Swagger Route
app.use('/api', serverRoutes);
app.use('/api/docs', swaggerBasicAuth, swaggerUi.serve, swaggerUi.setup(specs, { customSiteTitle: 'Expensio API Documentation' }));

app.listen(port, host, () => {
  console.log(process.env.NODE_ENV === 'LOCAL' ? ` Server running at ${protocol}://${host}:${port}` : `Server running at ${protocol}://${host}`);
  console.log(process.env.NODE_ENV === 'LOCAL' ? ` Find the docs at ${protocol}://${host}:${port}/api/docs` : `Find the docs at ${protocol}://${host}/api/docs`);
});

module.exports = app;
