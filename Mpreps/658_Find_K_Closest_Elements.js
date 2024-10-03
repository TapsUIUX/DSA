var findClosestElements = function (arr, k, x) {
  // create abs array
  let abs = arr.map((el) => Math.abs(el - x));
  let [i, j] = [0, k - 1];
  let sum = abs.slice(i, j + 1).reduce((s, el) => (s += el), 0);
  let runningSum = sum;
  let result = arr.slice(i, j + 1);
  // while loop, compare the sum, construct the result
  while (j < abs.length) {
    i += 1;
    j += 1;
    runningSum = runningSum - abs[i - 1] + abs[j];
    if (runningSum < sum) {
      sum = runningSum;
      result = arr.slice(i, j + 1);
    }
  }
  return result;
};

module.exports = findClosestElements;
