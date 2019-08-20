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

// FUNCTION
const letterPositions = function(str) {
  let output = {};
  for (let i = 0; i < str.length; i++) {
    // if 'letter' is a key in output...
    output[str[i]]
      // push index to 'array of positions'
      ? output[str[i]].push(i)
      // else, create new key with a new arr as its val
      : output[str[i]] = [i];
  }
  return output;
};


// TEST
let simple = 'hello';
assertArraysEqual(letterPositions(simple)['h'], [0]);
assertArraysEqual(letterPositions(simple)['e'], [1]);
assertArraysEqual(letterPositions(simple)['l'], [2, 3]);
assertArraysEqual(letterPositions(simple)['o'], [4]);

console.log('\n**************************************\n');
let test = 'lighthouse in the house';
assertArraysEqual(letterPositions(test)['l'], [0]);
assertArraysEqual(letterPositions(test)['i'], [1, 11]);
assertArraysEqual(letterPositions(test)['g'], [2]);
assertArraysEqual(letterPositions(test)['h'], [3, 5, 15, 18]);
assertArraysEqual(letterPositions(test)['t'], [4, 14]);
assertArraysEqual(letterPositions(test)['o'], [6, 19]);
assertArraysEqual(letterPositions(test)['u'], [7, 20]);
assertArraysEqual(letterPositions(test)['s'], [8, 21]);
assertArraysEqual(letterPositions(test)['e'], [9, 16, 22]);
assertArraysEqual(letterPositions(test)['n'], [12]);
