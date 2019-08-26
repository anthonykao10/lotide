const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {

  it('should return the first letter of each word', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    let test = map(words, word => word[0]);
    assert.deepEqual(test, [ 'g', 'c', 't', 'm', 't' ]);
  });

  it('should return the length of each word', () => {
    const words = ["ground", "control", "to", "major", "tom"];

    let test = map(words, word => word.length);
    assert.deepEqual(test, [ 6, 7, 2, 5, 3 ]);
  });

  it('should return true for elements which have a length >= 4', () => {
    const words = ["ground", "control", "to", "major", "tom"];

    let test = map(words, word => word.length >= 4);
    assert.deepEqual(test, [ true, true, false, true, false ]);
  });

});