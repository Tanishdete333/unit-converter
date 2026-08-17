const express = require("express");
const path = require("path");
const app = express();

const convert = require("./models/unit.models");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const unitOptions = {
  length: ["mm", "cm", "m", "km", "in", "ft", "yd", "mi"],
  weight: ["mg", "g", "kg", "oz", "lb"],
  temperature: ["C", "F", "K"]
};

function renderConverter(category) {
  return (req, res) => {
    res.render("converter", {
      category,
      units: unitOptions[category],
      submitted: false,
      error: null
    });
  };
}

function handleConvert(category) {
  return (req, res) => {
    const { value, fromUnit, toUnit } = req.body;
    try {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue)) throw new Error("Please enter a valid number");

      const result = convert(category, numericValue, fromUnit, toUnit);

      res.render("converter", {
        category,
        units: unitOptions[category],
        submitted: true,
        value: numericValue,
        fromUnit,
        toUnit,
        result: Math.round(result * 100) / 100,
        error: null
      });
    } catch (err) {
      res.render("converter", {
        category,
        units: unitOptions[category],
        submitted: false,
        error: err.message
      });
    }
  };
}

app.get("/length", renderConverter("length"));
app.post("/length", handleConvert("length"));

app.get("/weight", renderConverter("weight"));
app.post("/weight", handleConvert("weight"));

app.get("/temperature", renderConverter("temperature"));
app.post("/temperature", handleConvert("temperature"));

app.get("/", (req, res) => res.redirect("/length"));

module.exports = app;
