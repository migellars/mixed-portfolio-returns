const express = require("express");
const config = require("config");
const appVersions = require("../routes/appVersions");
const reqLogger = require("../startup/logger");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use(reqLogger);
  app.use("/api/version", appVersions);
  app.use(error);
  app.get("/", (req, res) => { res.json({status: true, message: "Welcome to Cheese API :)"}) });
};
