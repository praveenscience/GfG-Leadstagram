const express = require("express");
const app = express.Router();

const todos = require("../../constants/todos.json");

// Get the complete list.
app.get("/", (req, res) => {
  res.json(todos);
});
// Get the individual item.
app.get("/:id", (req, res) => {
  if (todos[req.params.id]) {
    res.json(todos[req.params.id]);
  } else {
    res.status(404).json("Get lost!");
  }
});
// Create a new item.
app.post("/", (req, res) => {
  if (typeof req.body.item !== "undefined") {
    if (todos.includes(req.body.item)) {
      res.status(409).json("How many times will you add?");
    } else {
      todos.push(req.body.item);
      res.status(201).json("Thanks for adding " + req.body.item);
    }
  } else {
    res.status(406).json("Give me item!");
  }
});

module.exports = app;