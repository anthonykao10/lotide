const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('should return ["Lighthouse", "Labs"], given ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it('should not modify the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it('should return an empty array given an array with 1 element', () => {
    const oneElemArrTail = tail([1]);
    assert.strictEqual(oneElemArrTail[0], undefined);
  });

  it('should return an empty array given an empty array', () => {
    const emptyArrTail = tail([]);
    assert.strictEqual(emptyArrTail[0], undefined);
  });

});
