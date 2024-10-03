function findKthPositive(arr, k) {
  let range = arr[arr.length - 1] + k + 1;
  let count = 0;
  for (let i = 1; i < range; i++) {
    if (arr.includes(i)) continue;
    count++;
    if (count == k) return i;
  }
}

function findKthPositive2(arr, k) {
  let [left, right] = [0, arr.length - 1];
  let getDiff = (i) => arr[i] - (i + 1);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (getDiff(mid) < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left + k;
}

module.exports = { findKthPositive, findKthPositive2 };
