function pickIndex(w) {
  //step 1: create a c s array
  let sum = 0;
  let cs = [];
  w.forEach((element) => {
    sum += element;
    cs.push(sum);
  });

  // step 2:  random
  let rand = Math.random() * sum;

  // step 3: we need to B search on CS to find the index

  let [left, right] = [0, w.length - 1];
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (rand > cs[mid]) {
      mid = left + 1;
    } else {
      right = mid;
    }
  }

  return right;
}
