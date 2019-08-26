const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 5, 3]), false);
assertEqual(eqArrays(['hi', 3], ['hi', 3]), true);