const Node = () => new Map([["end", false]]);
class Trie {
  constructor() {
    this.trie = Node();
  }
  add(word) {
    let node = this.trie;
    for (let i = 0; i < word.length; i++) {
      let c = word[i];
      if (!node.has(c)) {
        node.set(c, Node());
      }
      node = node.get(c);
      if (i === word.length - 1) {
        node.set("end", true);
      }
    }
  }
  has(word) {
    let node = this.trie;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!node.has(c)) {
        return false;
      }
      node = node.get(c);
      if (i === word.length - 1) {
        return node.get("end");
      }
    }
  }
}

module.exports = Trie;
