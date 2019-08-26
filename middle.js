const middle = function(arr) {
  let midArr = [];
  let midIdx = Math.floor(arr.length / 2);
  if (arr.length <= 2) return midArr;
  if (arr.length % 2 === 0) {
    midArr.push(arr[midIdx - 1]);
    midArr.push(arr[midIdx]);
  } else {
    midArr.push(arr[midIdx]);
  }
  return midArr;
};

module.exports = middle;