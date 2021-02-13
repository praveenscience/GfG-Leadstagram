const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3100;

// All the middlewares.
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json("Welcome to API Server!");
});

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
