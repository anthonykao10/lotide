const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {

  it('should return { h: 1, e: 1, l: 2, o: 1}, given input "h" for string "hello"', () => {
    const result = countLetters('hello');
    assert.deepEqual(result, { h: 1, e: 1, l: 2, o: 1});
  });

  it('should not count spaces', () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result[' '], undefined);
  });

  it('should return undefined given empty string', () => {
    const result = countLetters('');
    assert.strictEqual(result, undefined);
  });

});