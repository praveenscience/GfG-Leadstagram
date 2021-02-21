const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const app = express();
const port = 3100;

const root = require("./routes/root");

// All the middlewares.
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.set("trust proxy", 1);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

app.use("/", root);

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
