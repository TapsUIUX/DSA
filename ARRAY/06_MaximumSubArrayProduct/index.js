function maxSum(nums) {
  let len = nums.length;
  let map = new Map();
  max = nums[0];

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (map.has(i + "*" + (j - 1))) {
        sum = map.get(i + "*" + (j - 1)) * nums[j];
      } else {
        sum = nums[j];
      }
      map.set(i + "*" + j, sum);
      max = Math.max(max, sum);
      console.log(map);
    }
  }
  console.log(max);
  return max;
}

//maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// var maxSubArray = function (nums) {
//   let len = nums.length;
//   let onlyNegatives = true;
//   let sum = 0;
//   let max = -99999999;
//   let i = 0;
//   let min = -9999999;
//   while (i < len) {
//     sum = sum + nums[i];

//     if (nums[i] > 0) {
//       onlyNegatives = false;
//     } else {
//       min = Math.max(min, nums[i]);
//     }

//     if (sum < 0) {
//       sum = 0;
//     }
//     max = Math.max(sum, max);

//     console.log(sum, max);
//     i++;
//   }

//   if (onlyNegatives) {
//     return min;
//   }

//   return max;
// };

maxSum([-2, 0, -1]);

function maxProdKadans(nums) {
  let len = nums.length;
  let currMax = 1;
  let currMin = 1;
  let result = Math.max(...nums);

  for (let i = 0; i < len; i++) {
    if (nums[i] == 0) {
      currMax = 1;
      currMin = 1;
      continue;
    }

    prod = currMax * nums[i];
    currMax = Math.max(prod, currMin * nums[i], nums[i]);
    currMin = Math.min(prod, currMin * nums[i], nums[i]);
    result = Math.max(result, currMax);
  }
  console.log(result);
  return result;
}

maxProdKadans([2, 3, -2, 4]);
maxProdKadans([-2, 0, -1]);
