const inOrder = require("./inOrder");
const { preOrder, preOrderIter } = require("./preOrder");
const postOrder = require("./postOrder");
const levelOrder = require("./levelOrder");

describe("travesal test", () => {
  let tree = {
    val: 10,
    left: {
      val: 5,
      left: { val: 4, left: null, right: null },
      right: { val: 6, left: null, right: null },
    },
    right: {
      val: 15,
      left: { val: 14, left: null, right: null },
      right: { val: 20, left: null, right: null },
    },
  };

  it("should return pre order", () => {
    expect(preOrder(tree)).toMatchObject([10, 5, 4, 6, 15, 14, 20]);
    expect(preOrderIter(tree)).toMatchObject([10, 5, 4, 6, 15, 14, 20]);
  });
  it("should return in order", () => {
    expect(inOrder(tree)).toMatchObject([4, 5, 6, 10, 14, 15, 20]);
  });
  it("should return in order", () => {
    expect(postOrder(tree)).toMatchObject([4, 6, 5, 14, 20, 15, 10]);
  });
  it("should return in order", () => {
    expect(levelOrder(tree)).toMatchObject([10, 5, 15, 4, 6, 14, 20]);
  });
});
