const countLetters = function(str) {
  if (!str.length) return undefined;
  // Remove spaces
  let input = str.split(' ').join('');
  let output = {};
  for (let letter of input) {
    output[letter] = output[letter] ? ++output[letter] : 1;
  }
  return output;
};

module.exports = countLetters;