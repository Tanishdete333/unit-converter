const lengthToMeters = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
};
function convertLength(value, fromUnit, toUnit) {
  const meters = value * lengthToMeters[fromUnit];
  const result = meters / lengthToMeters[toUnit];
  return result;
}

module.exports = convertLength;