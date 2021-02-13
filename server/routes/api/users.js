const express = require("express");
const app = express.Router();

const users = {
  Praveen: {
    Name: "Praveen Kumar",
    WhatsApp: "+447405708485",
    Email: "praveen@praveen.science",
    Imgur: "T7bJCfJ",
    Social: {
      Facebook: "praveenscience",
      Twitter: "praveenscience",
      LinkedIn: "praveentech",
      Instagram: "praveenscience",
      Quora: null,
      YouTube: "praveenscience",
      Reddit: "praveenscience",
      Website: "https://praveen.science"
    }
  }
};

app.get("/", (req, res) => {
  res.json(users);
});

app.get("/:id", (req, res) => {
  if (users[req.params.id]) {
    res.json(users[req.params.id]);
  } else {
    res.status(404).json("Get lost!");
  }
});

module.exports = app;
