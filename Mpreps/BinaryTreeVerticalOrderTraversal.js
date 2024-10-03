//314. Binary Tree Vertical Order Traversal
//https://leetcode.com/problems/binary-tree-vertical-order-traversal/description/?envType=company&envId=facebook&favoriteSlug=facebook-thirty-days&difficulty=EASY%2CMEDIUM

function verticalOrder(root) {
  // create a stack
  let map = new Map();

  // we will do level order travesal
  let nodes = [[0, root]];

  while (nodes.length) {
    let curr = nodes.shift();
    let node = curr[1];
    let count = curr[0];
    map.set(count, map.get(count) ? [...map.get(count), node.val] : [node.val]);
    if (node.left) nodes.push([count - 1, node.left]);
    if (node.right) nodes.push([count + 1, node.right]);
  }

  const sortedKeys = Array.from(map.keys()).sort();
  const result = sortedKeys.map((key) => map.get(key));
  return result;
}

module.exports = verticalOrder;
