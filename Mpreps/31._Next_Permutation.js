//Given
// premutaion, the same sequance in any order.

function getPerm(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];

    let rest = str.slice(0, i) + str.slice(i + 1);

    console.log("curr", curr, "rest", rest);

    if (rest.length) {
      let inner = getPerm(rest);
      for (let i = 0; i < inner.length; i++) {
        result.push(curr + inner[i]);
      }
    } else {
      result.push(curr);
    }
  }
  console.log(result);
  return result;
}

console.log(getPerm("123"));
