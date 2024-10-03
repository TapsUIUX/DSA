var diameterOfBinaryTree = function (root) {
  let dia = Number.NEGATIVE_INFINITY;
  function calc(node) {
    if (!node) return 0;
    let left = calc(node.left);
    let right = calc(node.right);
    dia = Math.max(dia, left + right);
    return Math.max(left, right) + 1;
  }
  calc(root);
  return dia;
};

module.exports = diameterOfBinaryTree;
