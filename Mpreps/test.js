const findKthPositive = require("./1539_Kth_Missing_Positive_Number");
const removeNthNodeFromBack = require("./19_Remove_Nth_Node_From_End_Of_the_list");
const findWords = require("./212_word_search_2");
const compress = require("./443_String_Compression");
const getPerm = require("./46_Permutations");
const pow = require("./50_Pow(x,n)");
const diameterOfBinaryTree = require("./543_Diameter_of_Binary_Tree");
const findClosestElements = require("./658_Find_K_Closest_Elements");
const validPalindrome = require("./680_Valid_Palindrome_2");
const customSortString = require("./791_Custom_Sort_String");
const wordExist = require("./79_word_search");
const isAlienSorted = require("./953_Verifying_an_Alien_Dictionar");
const verticalOrder = require("./BinaryTreeVerticalOrderTraversal");
const getmaxLengthDuplicateChar = require("./Max_length_duplicate_char");
describe("Test", () => {
  it("should retun level odred vals", () => {
    let tree = {
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    };
    expect(verticalOrder(tree)).toMatchObject([[9], [3, 15], [20], [7]]);
  });
  it("should test pow", () => {
    expect(pow(2, 10)).toBe(1024);
  });
  it("should remove node from back of ll", () => {
    let head = {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
      },
    };

    let expected = {
      val: 1,
      next: { val: 2, next: { val: 3, next: { val: 5, next: null } } },
    };

    let node = JSON.parse(JSON.stringify(head));

    expect(removeNthNodeFromBack(node, 2)).toMatchObject(expected);

    node = JSON.parse(JSON.stringify(head));
    expected = head.next;
    expect(removeNthNodeFromBack(node, 5)).toMatchObject(expected);

    node = JSON.parse(JSON.stringify(head));
    expected = node;

    expect(removeNthNodeFromBack(node, 6)).toMatchObject(expected);
  });

  it("should return valid Paliandrom", () => {
    expect(validPalindrome("aba")).toBeTruthy();
    expect(validPalindrome("abca")).toBeTruthy();
    expect(validPalindrome("abc")).toBeFalsy();
  });

  it("should custom sort", () => {
    expect(customSortString("cba", "abcd")).toBe("cbad");
    expect(customSortString("bcafg", "abcd")).toBe("bcad");
  });

  it("should check if word exist or not", () => {
    expect(
      wordExist(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "ABCCED"
      )
    ).toBeTruthy();
    expect(
      wordExist(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "SEE"
      )
    ).toBeTruthy();
    expect(
      wordExist(
        [
          ["C", "A", "A"],
          ["A", "A", "A"],
          ["B", "C", "D"],
        ],
        "AAB"
      )
    ).toBeTruthy();
    expect(
      wordExist(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "ABCB"
      )
    ).toBeFalsy();
  });

  it("should find words", () => {
    expect(
      findWords(
        [
          ["o", "a", "a", "n"],
          ["e", "t", "a", "e"],
          ["i", "h", "k", "r"],
          ["i", "f", "l", "v"],
        ],
        ["oath", "pea", "eat", "rain"]
      )
    ).toMatchObject(["oath", "eat"]);

    expect(
      findWords(
        [
          ["a", "b"],
          ["c", "d"],
        ],
        ["abcb"]
      )
    ).toMatchObject([]);
  });

  it("should test alien dictionary", () => {
    expect(
      isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")
    ).toBeTruthy();
    expect(
      isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
    ).toBeFalsy();
    expect(
      isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")
    ).toBeFalsy();
  });

  it("should return K closest", () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toMatchObject([
      1, 2, 3, 4,
    ]);
    expect(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1)).toMatchObject([
      1, 1, 2, 3,
    ]);
    expect(findClosestElements([-2, -1, 1, 2, 3, 4, 5], 7, 3)).toMatchObject([
      -2, -1, 1, 2, 3, 4, 5,
    ]);
    expect(
      findClosestElements([0, 0, 1, 2, 3, 3, 4, 7, 7, 8], 3, 5)
    ).toMatchObject([3, 3, 4]);
  });

  it("should return hight frequency chars", () => {
    expect(getmaxLengthDuplicateChar("aaaabbbbccc")).toMatchObject(["a", "b"]);
    expect(getmaxLengthDuplicateChar("abcd")).toMatchObject([
      "a",
      "b",
      "c",
      "d",
    ]);
  });

  it("should compress string", () => {
    expect(compress(["a", "a", "b", "b", "c", "c", "c"])).toMatchObject([
      "a",
      "2",
      "b",
      "2",
      "c",
      "3",
    ]);
    expect(compress(["a"])).toMatchObject(["a"]);
    expect(
      compress([
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
      ])
    ).toMatchObject(["a", "b", "1", "2"]);
  });

  it("should return kth missing element", () => {
    expect(findKthPositive.findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9);
    expect(findKthPositive.findKthPositive([1, 2, 3, 4], 2)).toBe(6);
  });
  it("should return kth missing element 2", () => {
    expect(findKthPositive.findKthPositive2([2, 3, 4, 7, 11], 5)).toBe(9);
    expect(findKthPositive.findKthPositive2([1, 2, 3, 4], 2)).toBe(6);
  });

  it("should return diameater of B tree", () => {
    let root = {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null },
      },
      right: { val: 3, left: null, right: null },
    };
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  it("should return perm", () => {
    expect(getPerm.getPerm("123")).toMatchObject([
      "123",
      "132",
      "213",
      "231",
      "312",
      "321",
    ]);

    expect(getPerm.getPermArray([1, 2, 3])).toMatchObject([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  // END
});
