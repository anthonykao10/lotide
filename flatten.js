// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`\u274C Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${arr1} === ${arr2}`);
  }
};

// ACTUAL FUNCTION
const flatten = function(arr) {
  let output = [];
  arr.forEach(elem => {
    if (Array.isArray(elem)) return output.push(...elem);
    output.push(elem);
  });
  // console.log(output);
  return output;
};

// flatten([1, 2, [3, 4, [9, 9]], 5, [6]]);


// TESTS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);