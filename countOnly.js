// HELPER:
// input: item to check
// input: object of items to count
// return: true if item is a key in object (and its val is true), false otherwise
const toCount = function(item, itemsToCount) {
  for (let key in itemsToCount) {
    // Check if key is actual property of the obj itself (and not from its prototypes)
    if (itemsToCount.hasOwnProperty(key)) {
      // Check if 'item' is key in 'itemsToCount' obj, and if its value is 'true'
      if (itemsToCount[item]) return true;
    }
  }
  return false;
};

const countOnly = function(allItems, itemsToCount) {
  let output = {};
  // Loop allItems
  for (let elem of allItems) {
    if (toCount(elem, itemsToCount)) {
      // Increment count if elem exists, otherwise set to 1
      output[elem] = output[elem] ? ++output[elem] : 1;
    }
  }
  if (!Object.keys(output).length) return undefined;
  return output;
};

module.exports = countOnly;