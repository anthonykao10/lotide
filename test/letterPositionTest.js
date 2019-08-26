const assert = require('chai').assert;
const letterPositions = require('../letterPosition');

describe('#countOnly', () => {

  it('should return position 0, given the first letter in string', () => {
    let simpleStr = 'hello';
    assert.deepEqual(letterPositions(simpleStr)['h'], [0]);
  });

  it('should return positions [2, 3], given input \'l\' for string: "hello"', () => {
    let simpleStr = 'hello';
    assert.deepEqual(letterPositions(simpleStr)['l'], [2, 3]);
  });

  it('should return positions [3, 5, 15, 18], given input \'h\' for string: "lighthouse in the house"', () => {
    let test = 'lighthouse in the house';
    assert.deepEqual(letterPositions(test)['h'], [3, 5, 15, 18]);
  });

});