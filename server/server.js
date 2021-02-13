const express = require("express");
const app = express();
const port = 3100;

app.get("/", (req, res) => {
  res.json("Welcome to API Server!");
});

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
