const express = require("express");
const app = express.Router();

const todos = require("../../constants/todos.json");

app.get("/", (req, res) => {
  res.json(todos);
});

app.get("/:id", (req, res) => {
  if (todos[req.params.id]) {
    res.json(todos[req.params.id]);
  } else {
    res.status(404).json("Get lost!");
  }
});

module.exports = app;
