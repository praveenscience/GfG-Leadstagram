const express = require("express");
const app = express.Router();
const api = require("./api");

app.get("/", (req, res) => {
  res.json("Welcome to API Server!");
});

app.use("/api", api);

module.exports = app;
