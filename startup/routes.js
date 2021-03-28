const express = require("express");
const config = require("config");
const appVersions = require("../routes/appVersions");
const reqLogger = require("../startup/logger");
const error = require("../middleware/error");
const auth = require("../middleware/auth");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../startup/swagger.js');
const fixed = require('../routes/fixed')

module.exports = function (app) {
  app.use(express.json());
  app.use(reqLogger);
  app.use(error);
  app.use("/api/version", appVersions);
  app.use("/api/fixed", fixed)
  app.get("/", (req, res) => { res.json({status: true, message: "Welcome to Mixed Portfolio Returns :)"}) });
};
