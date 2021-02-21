const express = require("express");
const app = express.Router();

const notes = require("../../constants/notes.json");

// Get the complete list.
// ToDo: Restrict to logged in users.
app.get("/", (req, res) => {
  res.json(notes.filter(n => n.Active).map(n => n.Name));
});
// Get the individual item.
// ToDo: Restrict to logged in users.
app.get("/:id", (req, res) => {
  const note = notes.find(n => n.NoteID === +req.params.id);
  if (note && note.Active) {
    res.json(note);
  } else {
    res.status(404).json("Get lost!");
  }
});
// Create a new item.
app.post("/", (req, res) => {
  if (typeof req.body.Note !== "undefined") {
    notes.push({ Note: req.body.Note, NoteID: notes.length, Active: true });
    res.status(201).json("Thanks for adding " + req.body.item);
  } else {
    res.status(406).json("Give me item!");
  }
});
// Update a particular note.
app.put("/:id", (req, res) => {
  const note = notes.find(n => n.NoteID === +req.params.id);
  if (note && note.Active) {
    if (typeof req.body.Note !== "undefined") {
      note.Note = req.body.Note;
      res.status(202).json("Thanks for updating.");
    } else {
      res.status(406).json("Give me item!");
    }
  } else {
    res.status(404).json("Get lost!");
  }
});
// Delete an item.
app.delete("/:id", (req, res) => {
  const note = notes.find(n => n.NoteID === +req.params.id);
  if (note && note.Active) {
    note.Active = false;
    res.status(204).end();
  } else {
    res.status(404).json("Get lost!");
  }
});

module.exports = app;
