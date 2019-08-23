const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    // Check if elem is an array:
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) return false;

    // If not array, compare values:
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
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

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4, [[5], [6, [7, [8, 9]]]]]], [[2, 3], [4, [[5], [6, [7, [8, 9]]]]]]), true);
assertEqual(eqArrays([[2, 3], [4, [[5], [6, [7, [8]]]]]], [[2, 3], [4, [[5], [6, [7, [8, 9]]]]]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3, [5]], 4]), false);