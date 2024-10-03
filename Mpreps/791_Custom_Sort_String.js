function customSortString(order, s) {
  // step 1 : create the Frequency map

  let map = new Map();

  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    map.set(char, map.get(char) + 1 || 1);
  }

  // step 2: create the result string

  for (let i = 0; i < order.length; i++) {
    let char = order[i];
    let f = map.get(char);
    if (f) {
      for (let j = 0; j < f; j++) {
        result += char;
      }
    }
    map.delete(char);
  }

  let keys = Array.from(map.keys());

  for (let i = 0; i < keys.length; i++) {
    let char = keys[i];
    let f = map.get(char);
    for (let j = 0; j < f; j++) {
      result += char;
    }
    map.delete(char);
  }

  return result;
}

module.exports = customSortString;
