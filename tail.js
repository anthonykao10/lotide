const tail = function(arr) {
  return arr.slice(1);
};


// TEST CASES:
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  }
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Verify original array doesn't get modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// Test Case 3: An array with only one element should yield an empty array for its tail
const oneElemArrTail = tail([1]);
assertEqual(oneElemArrTail[0], undefined);

// Test Case 3: An empty array should yield an empty array for its tail
const emptyArrTail = tail([]);
assertEqual(emptyArrTail[0], undefined);




