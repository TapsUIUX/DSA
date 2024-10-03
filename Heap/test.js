const MinHeap = require("./min_heap");
const MaxHeap = require("./max_heap");
const Trie = require("../Tries/tries");

describe("Heap Test", () => {
  it("should return min", () => {
    const minHeap = new MinHeap();
    minHeap.add(7);
    minHeap.add(10);
    minHeap.add(5);
    minHeap.add(2);
    expect(minHeap.top()).toBe(2);
    minHeap.pop();
    expect(minHeap.top()).toBe(5);
    expect(minHeap.size()).toBe(3);
  });
  it("should return max", () => {
    const maxHeap = new MaxHeap();
    maxHeap.add(7);
    maxHeap.add(10);
    maxHeap.add(5);
    maxHeap.add(2);
    expect(maxHeap.top()).toBe(10);
    maxHeap.pop();
    expect(maxHeap.top()).toBe(7);
    expect(maxHeap.size()).toBe(3);
  });

  it("should create Trie", () => {
    const trie = new Trie();
    trie.add("apple");
    expect(trie.has("apple")).toBeTruthy();
    expect(trie.has("app")).toBeFalsy();
    trie.add("app");
    expect(trie.has("app")).toBeTruthy();
  });
});
