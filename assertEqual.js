// Make the function compare the two values it takes in and print out a message telling us if they match or not.
// If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in).
// Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in).
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE
// identical strings:
assertEqual("Hippo", "Hippo");
// non-identical strings:
assertEqual("Lighthouse Labs", "Bootcamp");
// identical numbers
assertEqual(1, 1);
// non-identical numbers
assertEqual(1, -1);
// different types
assertEqual(3, '3');