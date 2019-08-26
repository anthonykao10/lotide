const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    // IF val is an array, check for equality with 'eqArrays'
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      return eqArrays(obj1[key], obj2[key]);
    }

    // IF val is object AND NOT array:
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!eqObjects(obj1[key], obj2[key])) return false;

    // Otherwise, check val as primitives:
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;