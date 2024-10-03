class MaxHeap {
  constructor() {
    this.heap = [];
  }
  add(val) {
    this.heap.push(val);
    // heapify
    this.heapUp();
  }
  size() {
    return this.heap.length;
  }
  top() {
    return this.heap[0];
  }
  pop() {
    let popped = this.heap.shift();
    this.heapDown();
    return popped;
  }

  heapUp() {
    let ci = this.size() - 1;
    let pi = Math.floor((ci - 1) / 2);
    while (pi >= 0) {
      if (this.heap[pi] < this.heap[ci]) {
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
      let mi = this.heap[lc] > this.heap[rc] ? lc : rc;
      if (this.heap[pi] < this.heap[mi]) {
        [this.heap[pi], this.heap[mi]] = [this.heap[mi], this.heap[pi]];
      }
      pi = mi;
    }
  }
}

module.exports = MaxHeap;
