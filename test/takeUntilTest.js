const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {

  it('should return array of all elements until (not including) the first negative element', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data, x => x < 0);
    assert.deepEqual(result, [ 1, 2, 5, 7, 2 ]);
  });

  it('should return array of all elements until (not including) the first comma ","', () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

    let result = takeUntil(data, x => x === ',');
    assert.deepEqual(result, [ "I've", "been", "to", "Hollywood" ]);
  });

  it('should return undefined, given and empty array', () => {
    const data = [];

    let result = takeUntil(data, elem => elem.length >= 4);
    assert.strictEqual(result, undefined);
  });

}); 