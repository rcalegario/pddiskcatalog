const express = require("express");
const bodyParser = require("body-parser");
const InitServer = require("../bin/www");
const ConfigApiRoutes = require('../config/routes');

if (process.env.NODE_ENV === "dev") require("dotenv").config({ path: '../.env-dev' });

const app = express();
app.use(bodyParser.json({ limit: "50mb", type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
InitServer(app);
ConfigApiRoutes(app);

module.exports = app;
