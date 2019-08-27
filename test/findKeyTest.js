const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {

  it('should return the first matching key which has stars === 2', () => {
    let test = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    assert.strictEqual(test, 'noma');
  });

  it('should return undefined, given an empty object', () => {
    let test = findKey({}, x => x.stars === 2);
    assert.strictEqual(test, undefined);
  });

});
