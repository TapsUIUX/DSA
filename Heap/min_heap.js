class MinHeap {
  constructor() {
    this.heap = [];
  }
  add(val) {
    this.heap.push(val);
    this.heapUp();
  }
  top() {
    return this.heap[0];
  }

  pop() {
    let top = this.heap.shift();
    this.heapDown();
    return top;
  }
  size() {
    return this.heap.length;
  }

  heapUp() {
    let ci = this.heap.length - 1;
    let pi = Math.floor((ci - 1) / 2);
    while (pi >= 0) {
      if (this.heap[pi] > this.heap[ci]) {
        [this.heap[pi], this.heap[ci]] = [this.heap[ci], this.heap[pi]];
      }
      ci = pi;
      pi = Math.floor((ci - 1) / 2);
    }
  }
  heapDown() {
    let pi = 0;
    while (pi < this.size()) {
      let lc = pi * 2 + 1;
      let rc = lc + 1;
      let mi = this.heap[lc] < this.heap[rc] ? lc : rc;
      if (this.heap[mi] < this.heap[pi]) {
        [this.heap[pi], this.heap[mi]] = [this.heap[mi], this.heap[pi]];
      }
      pi = mi;
    }
  }
}

module.exports = MinHeap;
