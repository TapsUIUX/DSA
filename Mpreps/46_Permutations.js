function getPerm(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let rest = str.slice(0, i) + str.slice(i + 1);
    if (rest) {
      let restPerm = getPerm(rest);
      for (let j = 0; j < restPerm.length; j++) {
        curr += restPerm[j];
        result.push(curr);
        curr = str[i];
      }
    } else {
      result.push(curr);
    }
  }

  return result;
}

function getPermArray(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let curr = [nums[i]];
    let rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
    if (rest.length) {
      let restPerm = getPermArray(rest);
      for (let j = 0; j < restPerm.length; j++) {
        curr.push(...restPerm[j]);
        result.push(curr);
        curr = [nums[i]];
      }
    } else {
      result.push(curr);
    }
  }

  return result;
}
module.exports = { getPerm, getPermArray };
