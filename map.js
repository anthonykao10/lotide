const map = function(array, callback) {
  if (!array.length) return undefined;
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
