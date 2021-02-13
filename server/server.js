const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3100;

// All the middlewares.
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json("Welcome to API Server!");
});

app.get("/:param", (req, res) => {
  res.json(`Welcome to API Server, ${req.params.param}!`);
});

app.post(["/", "/:Name", "/:Profile/:Username"], express.json(), (req, res) => {
  res.json({
    Message: "I am in the post!",
    Params: req.params,
    Query: req.query,
    Body: req.body
  });
});

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
