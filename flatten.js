const flatten = function(arr) {
  let output = [];
  arr.forEach(elem => {
    if (Array.isArray(elem)) return output.push(...elem);
    output.push(elem);
  });
  return output;
};

module.exports = flatten;