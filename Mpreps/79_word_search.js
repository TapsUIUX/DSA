function wordExist(grid, word) {
  //step1: create the limits
  let [iLimit, jLimit] = [grid.length, grid[0].length];
  let visited = new Set();

  //step 2: iterate thru the Grid

  for (let i = 0; i < iLimit; i++) {
    for (let j = 0; j < jLimit; j++) {
      if (process(i, j, 0)) return true;
    }
  }
  return false;

  // step 3: impliment the DFS

  function process(i, j, c) {
    if (c === word.length) return true;
    if (
      i < 0 ||
      i >= iLimit ||
      j < 0 ||
      j >= jLimit ||
      word[c] != grid[i][j] ||
      visited.has(i + "*" + j)
    )
      return false;

    visited.add(i + "*" + j);

    let res =
      process(i + 1, j, c + 1) ||
      process(i - 1, j, c + 1) ||
      process(i, j + 1, c + 1) ||
      process(i, j - 1, c + 1);

    visited.delete(i + "*" + j);

    return res;
  }
}

module.exports = wordExist;
