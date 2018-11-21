const express = require("express");
const bodyParser = require("body-parser");
const { configLogger } = require('./config/logger');
const InitServer = require("./bin/www");
const InitSwagger = require('./config/swagger');
const ConfigApiRoutes = require('./config/routes');
const ConfigErrorHandler = require('./common/exception/handler.error');

if (process.env.NODE_ENV === "dev") require("dotenv").config({ path: '../.env-dev' });

const app = express();
app.use(bodyParser.json({ limit: "50mb", type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
configLogger(app);
InitServer(app);
InitSwagger(app);
ConfigApiRoutes(app);
ConfigErrorHandler(app);

module.exports = app;
