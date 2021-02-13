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

module.exports = app;
