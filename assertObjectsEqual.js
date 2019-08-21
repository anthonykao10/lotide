const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise return false.
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key in obj1) {
    // IF val is an array, check for equality with 'eqArrays'
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      return eqArrays(obj1[key], obj2[key]);
    }
    // Otherwise, check val as primitives
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

// IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  eqObjects(actual, expected)
    ? console.log(`\u2714 Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`)
    : console.log(`\u274C Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
};

// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const yy = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ab);
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc); // will fail
console.log('\n===================================\n');
assertObjectsEqual(cd, dc);
assertObjectsEqual(dc, dc);
assertObjectsEqual(cd, cd2); // will fail
assertObjectsEqual(cd, yy);