const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {

  it('should return true given equal nested arrays', () => {
    const result = eqArrays( [[2, 3], [4, [[5], [6, [7, [8, 9]]]]]], [[2, 3], [4, [[5], [6, [7, [8, 9]]]]]]);
    assert.strictEqual(result, true);
  });

  it('should return false given unequal nested arrays', () => {
    const result = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    assert.strictEqual(result, false);
  });

  it('should return true given empty arrays', () => {
    const result = eqArrays([], []);
    assert.strictEqual(result, true);
  });

});