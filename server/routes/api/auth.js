const express = require("express");
const app = express.Router();

const users = [
  {
    Username: "Praveen",
    Password: "Praveen@123",
    FullName: "Praveen Kumar"
  },
  {
    Username: "Abhishek",
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
    res.status(`Successfully logged in as ${match.FullName}!`);
  }
});
// Update existing user
// Delete existing user

module.exports = app;
