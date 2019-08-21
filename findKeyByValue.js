const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  if (!obj) return undefined;

  let keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === val) return key;
  }
  return undefined;
};


// TEST
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  number1: 1,
  bool: false
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// empty obj:
assertEqual(findKeyByValue({}, "The Expanse"), undefined);
// different value types:
assertEqual(findKeyByValue(bestTVShowsByGenre, 1), 'number1');
assertEqual(findKeyByValue(bestTVShowsByGenre, false), 'bool');