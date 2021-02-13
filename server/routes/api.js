const express = require("express");
const app = express.Router();
const users = require("./api/users");
const todos = require("./api/todos");

app.get("/", (req, res) => {
  res.json("You're in /api!");
});
app.use("/users", users);
app.use("/todos", todos);

module.exports = app;
