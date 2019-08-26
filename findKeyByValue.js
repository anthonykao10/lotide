const findKeyByValue = function(obj, val) {
  if (!obj) return undefined;

  let keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === val) return key;
  }
  return undefined;
};

module.exports = findKeyByValue;