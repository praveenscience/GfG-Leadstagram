const express = require("express");
const app = express.Router();

const users = require("../../constants/users.json");

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

app.post("/", (req, res) => {
  const { Name, WhatsApp, Email, Social } = req.body;
  const Errors = [];
  if (!Name || !WhatsApp || !Email || !Social) {
    ["Name", "WhatsApp", "Email"].forEach(field => {
      if (!req.body[field]) {
        Errors.push(`${field} is missing.`);
      }
    });
    res.status(406).json({
      Message: "You need to provide Name, WhatsApp, Email and one of Social.",
      Errors
    });
  } else {
    if (Email && !/\S+@\S+\.\S+/.test(Email)) {
      Errors.push("Email address is Invalid.");
    }
    if (WhatsApp[0] !== "+") {
      Errors.push(
        "WhatsApp is Invalid. Please enter in the international format."
      );
    }
    if (!Social) {
      Errors.push("Social is missing.");
    } else if (Object.values(Social).filter(Boolean).length === 0) {
      Errors.push("At least one of the social elemements should be there.");
    }
    if (Errors.length > 0) {
      res.status(406).json({ Errors });
    } else {
      let Slug = Name.toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      if (users[Slug]) {
        Slug += new Date().getTime();
      }
      users[Slug] = req.body;
      res.status(201).json("Created a user with slug: " + Slug);
    }
  }
  res.status(400).json("Something bad happened!");
});

module.exports = app;
