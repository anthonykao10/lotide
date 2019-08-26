const findKey = function(obj, cb) {
  if (!obj) return undefined;

  let keys = Object.keys(obj);
  for (let key of keys) {
    if (cb(obj[key])) return key;
  }
  return undefined;
};

module.exports = findKey;