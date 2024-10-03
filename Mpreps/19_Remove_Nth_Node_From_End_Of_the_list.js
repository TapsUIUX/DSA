function removeNthNodeFromBack(head, k) {
  let node = head;
  let map = new Map([[0, null]]);
  let len = 0;
  while (node) {
    len += 1;
    map.set(len, node);
    node = node.next;
  }
  if (len < k) return head;
  if (len === k) {
    head = head.next;
  } else {
    let toBeEdited = map.get(len - k);
    if (toBeEdited) {
      toBeEdited.next = toBeEdited.next ? toBeEdited.next.next : null;
    }
  }

  return head;
}

module.exports = removeNthNodeFromBack;
