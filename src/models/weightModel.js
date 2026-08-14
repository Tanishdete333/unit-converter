const weightToGrams = {
  mg: 0.001,
  g: 1,
  kg: 1000,
  oz: 28.3495,
  lb: 453.592,
};

function convertWeight(value, fromUnit, toUnit) {
  const grams = value * weightToGrams[fromUnit];
  const result = grams / weightToGrams[toUnit];
  return result;
}

module.exports = convertWeight;
