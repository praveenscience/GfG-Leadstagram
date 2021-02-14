const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3100;

const root = require("./routes/root");

// All the middlewares.
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/", root);

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
