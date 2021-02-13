const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3100;

const root = require("./routes/root");

// All the middlewares.
app.use(morgan("dev"));
app.use(express.json());

app.use("/", root);

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
