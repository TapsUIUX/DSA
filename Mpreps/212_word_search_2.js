let isWordExist = require("./79_word_search");

function findWords(grid, words) {
  // step 1 : create limit
  let [iLimit, jLimit] = [grid.length, grid[0].length];
  let result = new Set();
  let visited = new Set();

  // step 2 : impliment a Trie
  let trie = new Map();
  let addToTrie = (word) => {
    let node = trie;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!node.has(c)) node.set(c, new Map());
      node = node.get(c);
    }
    node.set("end", true);
  };
  //step 3: add the words to the Trie
  words.forEach((word) => {
    addToTrie(word);
  });
  //step 4 : iterate thru the grid and call DFS
  for (let i = 0; i < iLimit; i++) {
    for (let j = 0; j < jLimit; j++) {
      //call dfs
      process(i, j, trie, "");
    }
  }
  //step 5: impliment the DFS
  function process(i, j, node, w) {
    if (
      i < 0 ||
      j < 0 ||
      i >= iLimit ||
      j >= jLimit ||
      visited.has(i + "*" + j) ||
      !node.has(grid[i][j])
    )
      return;

    //check trie
    node = node.get(grid[i][j]);
    w += grid[i][j];
    if (node.get("end")) result.add(w);

    // add the value to the visited
    visited.add(i + "*" + j);

    process(i + 1, j, node, w);
    process(i - 1, j, node, w);
    process(i, j + 1, node, w);
    process(i, j - 1, node, w);

    visited.delete(i + "*" + j);
  }

  return Array.from(result);
}

module.exports = findWords;
