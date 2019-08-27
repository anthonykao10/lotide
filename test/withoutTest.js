const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {

  it('should return the array without itemsToRemove', () => {
    const source = ["hello", "world", "lighthouse"];
    const itemsToRemove = ["hello"];
    let test = without(source, itemsToRemove);
    assert.deepEqual(test, ["world", "lighthouse"]);
  });

  it('should return the source when given an invalid itemToRemove', () => {
    const source = ["hello", "world", "lighthouse"];
    const itemsToRemove = [5];
    let test = without(source, itemsToRemove);
    assert.deepEqual(test, ["hello", "world", "lighthouse"]);
  });

  it('should return an empty array, when given an empty source', () => {
    const source = [];
    const itemsToRemove = ['hi'];
    let test = without(source, itemsToRemove);
    assert.deepEqual(test, []);
  });

  it('should return the source, when given an empty itemsToRemove array', () => {
    const source = ["hello", "world", "lighthouse"];
    const itemsToRemove = [];
    let test = without(source, itemsToRemove);
    assert.deepEqual(test, ["hello", "world", "lighthouse"]);
  });

  it('should not modify the source array (non-mutating)', () => {
    const words = ["hello", "world", "lighthouse"];
    without(["hello", "world", "lighthouse"], ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

});