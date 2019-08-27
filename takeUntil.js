const takeUntil = function(array, callback) {
  if (!array.length) return undefined;
  let output = [];
  for (let elem of array) {
    if (callback(elem)) break;
    output.push(elem);
  }
  return output;
};

module.exports = takeUntil;




