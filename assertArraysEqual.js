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

// TESTS
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['hi', 3], ['hi', 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 1]);
assertArraysEqual([1, 2, 3], [1, 5, 3]);