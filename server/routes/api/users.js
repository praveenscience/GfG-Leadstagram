const express = require("express");
const app = express.Router();

const users = require("../../constants/users.json");

app.get("/", (req, res) => {
  res.json(users);
});

app.get("/:id", (req, res) => {
  if (users[req.params.id]) {
    res.json(users[req.params.id]);
  } else {
    res.status(404).json("Get lost!");
  }
});

module.exports = app;
