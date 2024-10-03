function findPeakElement(nums) {
  // s 1: create idexes
  let [left, right] = [-1, nums.length];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let leftN = mid - 1 >= 0 ? nums[mid - 1] : Number.NEGATIVE_INFINITY;
    let rightN =
      mid + 1 < nums.length ? nums[mid + 1] : Number.NEGATIVE_INFINITY;

    if (nums[mid] > leftN && nums[mid] > rightN) {
      return mid;
    } else if (rightN > nums[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }
}
module.exports = findPeakElement;
