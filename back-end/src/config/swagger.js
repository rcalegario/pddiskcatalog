const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swStats = require("swagger-stats");

/**
 * Configura o swagger para gerar a documentação
 * da API
 * @param {Express} app express app
 */
module.exports = (app) => {
  console.log("Inicializando a documentação da API Swagger");

  const swaggerDefinition = {
    info: {
      title: "Node Swagger API",
      version: "1.0.0",
      description: `PD Disk Collection - API ${
        process.env.URL_SWAGGER
      }`
    },
    host: `${process.env.URL_APP}`,
    basePath: "/api",
    securityDefinitions: {
      Bearer: {
        type: "apiKey",
        description: "Bearer authorization of an API",
        name: "Authorization",
        in: "header"
      }
    }
  };

  // options for the swagger docs
  const options = {
    swaggerDefinition,
    apis: ["./**/*.routing.js"]
  };

  // initialize swagger-jsdoc
  const swaggerSpec = swaggerJSDoc(options);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use(swStats.getMiddleware({ swaggerSpec }));
};