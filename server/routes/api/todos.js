const express = require("express");
const app = express.Router();

const todos = [
  "Milk",
  "Yogurt",
  "KurKure",
  "Curd",
  "Bread",
  "Eggs",
  "Banana",
  "Oranges",
  "Oats",
  "Maple Syrup",
  "Pancakes",
  "Juice",
  "Chicken",
  "Paprika Powder",
  "Cheese",
  "Pasta",
  "Bourbon",
  "Aubergine",
  "Maggi",
  "Tomato",
  "Red Chilies",
  "Onions",
  "Apple",
  "Chips",
  "Jalapeno",
  "Paneer",
  "Dosa",
  "Bread",
  "Rice",
  "Chocolates",
  "Croissant",
  "Herbs and Spices",
  "Sugar",
  "Vinegar",
  "Stock Cubes",
  "Salt"
];

app.get("/", (req, res) => {
  res.json(todos);
});

app.get("/:id", (req, res) => {
  if (todos[req.params.id]) {
    res.json(todos[req.params.id]);
  } else {
    res.status(404).json("Get lost!");
  }
});

module.exports = app;
