// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2714 Assertion Passed: ${actual} === ${expected}`);
  }
};

// ACTUAL FUNCTION
const countLetters = function(str) {
  // Remove spaces
  let input = str.split(' ').join('');
  let output = {};
  for (let letter of input) {
    output[letter] = output[letter] ? ++output[letter] : 1;
  }
  return output;
};

// TEST
assertEqual(countLetters("lighthouse in the house")['l'], 1);
assertEqual(countLetters("lighthouse in the house")['i'], 2);
assertEqual(countLetters("lighthouse in the house")['g'], 1);
assertEqual(countLetters("lighthouse in the house")['h'], 4);
assertEqual(countLetters("lighthouse in the house")['t'], 2);
assertEqual(countLetters("lighthouse in the house")['o'], 2);
assertEqual(countLetters("lighthouse in the house")['u'], 2);
assertEqual(countLetters("lighthouse in the house")['s'], 2);
assertEqual(countLetters("lighthouse in the house")['e'], 3);
assertEqual(countLetters("lighthouse in the house")['n'], 1);

