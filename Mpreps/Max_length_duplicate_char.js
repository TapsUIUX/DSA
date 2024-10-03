/** 
Q1: Given a string with duplicate characters sequence, return the maximum length duplicate contiguous characters
'aaaabbbbccc' => ['a','b']
'abcd' => ['a','b','c','d]
 */

function getmaxLengthDuplicateChar(str) {
  //step 1 : lets initiate the values
  let count = 0;
  let map = new Map();
  let max = Number.NEGATIVE_INFINITY;
  let [i, j] = [0, 0];
  while (j < str.length) {
    while (str[i] === str[j]) {
      count++;
      j++;
    }
    max = Math.max(max, count);
    if (map.has(count)) map.set(count, [...map.get(count), str[i]]);
    else map.set(count, [str[i]]);
    count = 0;
    i = j;
  }
  return map.get(max);
}
module.exports = getmaxLengthDuplicateChar;
