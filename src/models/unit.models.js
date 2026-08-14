const convertLength = require("./lengthModel");
const convertWeight = require("./weightModel");
const convertTemperature = require("./temperatureModel");

function convert(category, value, fromUnit, toUnit) {
  switch (category) {
    case "length":
      return convertLength(value, fromUnit, toUnit);
    case "weight":
      return convertWeight(value, fromUnit, toUnit);
    case "temperature":
      return convertTemperature(value, fromUnit, toUnit);
    default:
      throw new Error("Invalid Category");
  }
}

module.exports = convert;
