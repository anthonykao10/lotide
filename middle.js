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
const middle = function(arr) {
  let midArr = [];
  let midIdx = Math.floor(arr.length / 2);
  if (arr.length <= 2) return midArr;
  if (arr.length % 2 === 0) {
    midArr.push(arr[midIdx - 1]);
    midArr.push(arr[midIdx]);
  } else {
    midArr.push(arr[midIdx]);
  }
  return midArr;
};

// TEST CODE
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);