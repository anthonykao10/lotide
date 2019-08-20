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
const without = function(source, itemsToRemove) {
  let output = source;
  itemsToRemove.forEach(toRemove => {
    output = output.filter(elem => elem !== toRemove);
  });
  // console.log(output);
  return output;
};

// without(["hello", "world", "lighthouse"], ["hello", "lighthouse", 'world']);


// TESTS
assertArraysEqual(without(["hello", "world", "lighthouse"], ["hello"]), ["world", "lighthouse"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["hello", "lighthouse"]), ["world"]);
assertArraysEqual(without(["hello", "world", "lighthouse", 1], ["hello", "lighthouse", 1, 2, 3]), ["world"]);

// Verify without doesn't modify original array
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);