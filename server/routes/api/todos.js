const express = require("express");
const app = express.Router();

const todos = require("../../constants/todos.json").map((Name, ID) => ({
  Name,
  ID,
  Active: true
}));

// Get the complete list.
app.get("/", (req, res) => {
  res.json(todos.filter(t => t.Active).map(t => t.Name));
});
// Get the individual item.
app.get("/:id", (req, res) => {
  if (todos[req.params.id] && todos[req.params.id].Active) {
    res.json(todos[req.params.id].Name);
  } else {
    res.status(404).json("Get lost!");
  }
});
// Create a new item.
app.post("/", (req, res) => {
  if (typeof req.body.item !== "undefined") {
    if (todos.map(t => t.Name).includes(req.body.item)) {
      res.status(409).json("How many times will you add?");
    } else {
      todos.push({ Name: req.body.item, ID: todos.length, Active: true });
      res.status(201).json("Thanks for adding " + req.body.item);
    }
  } else {
    res.status(406).json("Give me item!");
  }
});
// Update a particular element.
app.put("/:id", (req, res) => {
  if (todos[req.params.id] && todos[req.params.id].Active) {
    if (typeof req.body.item !== "undefined") {
      if (todos.map(t => t.Name).includes(req.body.item)) {
        res.status(409).json("How many times will you add?");
      } else {
        todos[req.params.id].Name = req.body.item;
        res.status(202).json("Thanks for updating " + req.body.item);
      }
    } else {
      res.status(406).json("Give me item!");
    }
  } else {
    res.status(404).json("Get lost!");
  }
});
// Delete an item.
app.delete("/:id", (req, res) => {
  if (todos[req.params.id] && todos[req.params.id].Active) {
    todos[req.params.id].Active = false;
    res.status(204).end();
  } else {
    res.status(404).json("Get lost!");
  }
});

module.exports = app;
