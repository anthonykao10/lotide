const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {

  it('should return 1, given only 1 match', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true});
    assert.deepEqual(result, { "Jason": 1 });
  });

  it('should return {}, given only no matches', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Karima": true });
    assert.strictEqual(result, undefined);
  });

  it('should return multiple counts, given multiple matches', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Fang",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Fang": true });
    assert.deepEqual(result, { "Fang": 3 });
  });


});