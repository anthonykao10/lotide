const without = function(source, itemsToRemove) {
  // if (!source.length) return undefined;
  // if (!itemsToRemove.length) return source;
  let output = source;
  itemsToRemove.forEach(toRemove => {
    output = output.filter(elem => elem !== toRemove);
  });
  return output;
};

module.exports = without;