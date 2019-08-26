const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeysByValue', () => {

  it('should return the prooper key given a string value', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      number1: 1,
      bool: false
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined, if not found', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      number1: 1,
      bool: false
    };   
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('should return undefined, given an empty object', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      number1: 1,
      bool: false
    };
    assert.strictEqual(findKeyByValue({}, "The Expanse"), undefined);
  });

});