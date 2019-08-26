const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {

  it('should return true given equal nested objects', () => {
    const result = eqObjects({ a: { x: 5, y: { q: 10 }, z: 1 }, b: 2 }, { a: { x: 5, y: { q: 10 }, z: 1 }, b: 2 });
    assert.strictEqual(result, true);
  });

  it('should return false given unequal nested objects', () => {
    const result = eqObjects({ a: { z: 1, }, b: 1 }, { a: { z: 1 }, b: 2 });
    assert.strictEqual(result, false);
  });

  it('should return true given empty objects', () => {
    const result = eqObjects({}, {});
    assert.strictEqual(result, true);
  });

});