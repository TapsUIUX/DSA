var isAlienSorted = function (words, order) {
  //step1: create the map for the order
  let map = new Map();
  for (let i = 0; i < order.length; i++) {
    const c = order[i];
    map.set(c, i);
  }
  //step2: iterate thru the words.impliment the conditions
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const curr = words[i];

    for (let j = 0; j < prev.length; j++) {
      const cc = curr[j];
      const pc = prev[j];
      if (j > curr.length) return false;
      if (cc === pc) continue;
      else if (map.get(cc) > map.get(pc)) break;
      else return false;
    }
  }
  return true;
};

module.exports = isAlienSorted;
