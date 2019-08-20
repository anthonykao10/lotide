// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  }
};

// ACTUAL FUNCTION

// HELPER:
// input: item to check
// input: object of items to count
// return: true if item is a key in object (and its val is true), false otherwise
const toCount = function(item, itemsToCount) {
  for (let key in itemsToCount) {
    // Check if key is actual property of the obj itself (and not from its prototypes)
    if (itemsToCount.hasOwnProperty(key)) {
      // Check if 'item' is key in 'itemsToCount' obj, and if its value is 'true'
      if (itemsToCount[item]) return true;
    }
  }
  return false;
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let output = {};
  // Loop allItems
  for (let elem of allItems) {
    if (toCount(elem, itemsToCount)) {
      // Increment count if elem exists, otherwise set to 1
      output[elem] = output[elem] ? ++output[elem] : 1;
    }
  }
  return output;
};

// Test toCount
// let obj = { "Jason": true, "Karima": true, "Fang": true };
// console.log(toCount('Jason', obj));
// console.log(toCount('hippo', obj));
// console.log(toCount('Fang', obj));



// TEST CASES
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);