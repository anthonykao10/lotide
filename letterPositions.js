const letterPositions = function(str) {
  if (!str.length) return undefined;
  let output = {};
  for (let i = 0; i < str.length; i++) {
    // if 'letter' is a key in output...
    output[str[i]]
      // push index to 'array of positions'
      ? output[str[i]].push(i)
      // else, create new key with a new arr as its val
      : output[str[i]] = [i];
  }
  return output;
};

module.exports = letterPositions;