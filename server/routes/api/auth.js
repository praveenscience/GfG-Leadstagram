const express = require("express");
const app = express.Router();

const users = [
  {
    Username: "Praveen@gfg.com",
    Password: "Praveen@123",
    FullName: "Praveen Kumar"
  },
  {
    Username: "Abhishek@gfg.com",
    Password: "Abhishek@123",
    FullName: "Abhishek Kumar"
  }
];

// Create new user
// Validate existing user
app.post("/login", (req, res) => {
  const { Username, Password } = req.body;
  let match = users.find(
    u => u.Username === Username && u.Password === Password
  );
  if (match) {
    // Make a shallow copy so that even if we remove password, it doesn't affect the original variable.
    match = { ...match };
    delete match.Password;
    req.session.User = match;
    res.json(`Successfully logged in as ${match.FullName}!`);
  } else {
    res.status(401).json("Username and Password doesn't match.");
  }
});
app.get("/login", (req, res) => {
  if (typeof req.session.User !== "object") {
    res.status(403).json("No one signed in.");
  } else {
    res.json(req.session.User);
  }
});

module.exports = app;
