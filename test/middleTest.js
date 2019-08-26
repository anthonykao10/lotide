const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  it('should return [3], given [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return [3, 4], given [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it('should return [], given [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return [], given [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return [], given []', () => {
    assert.deepEqual(middle([]), []);
  });

});