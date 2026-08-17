const express = require("express");
const convert = require("./models/unit.models");
const app = express();

app.use(express.json());

app.post("/length", (req, res) => {
  const { value, fromUnit, toUnit } = req.body;
  const result = convert("length", parseFloat(value), fromUnit, toUnit);
  res.status(200).json({ value, fromUnit, toUnit, result });
});

app.post("/weight", (req, res) => {
  const { value, fromUnit, toUnit } = req.body;
  const result = convert("weight", parseFloat(value), fromUnit, toUnit);
  res.status(200).json({ value, fromUnit, toUnit, result });
});

app.post("/temperature", (req, res) => {
  const { value, fromUnit, toUnit } = req.body;
  const result = convert("temperature", parseFloat(value), fromUnit, toUnit);
  res.status(200).json({ value, fromUnit, toUnit, result });
});

module.exports = app;
