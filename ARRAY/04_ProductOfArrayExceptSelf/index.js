function produxtExceptSelf(nums) {
  let firstZeroIndex = nums.indexOf(0);
  let lastZeroIndex = nums.lastIndexOf(0);
  if (firstZeroIndex != -1 && firstZeroIndex != lastZeroIndex)
    return Array(nums.length).fill(0);

  let prod = nums.reduce((acc, el, i) => {
    return el == 0 ? acc * 1 : acc * el;
  }, 1);

  console.log(firstZeroIndex, lastZeroIndex, prod);

  for (let i = 0; i < nums.length; i++) {
    if (firstZeroIndex != -1) {
      nums[i] = 0;
      nums[firstZeroIndex] = prod;
    } else {
      nums[i] = prod / nums[i];
    }
  }

  return nums;
}
