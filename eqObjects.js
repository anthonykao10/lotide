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
      eqArrays(obj1[key], obj2[key]);
    }
    // Otherwise, check val as primitives
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};



// TEST CASES:
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  }
};

// Check primitive values:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

// Check array values:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd2, cd2), true);

