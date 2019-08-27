const eqObjects = require('./ eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected)
    ? console.log(`\u2714 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`\u274C Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;