const UnLinkedList = function (linkedList) {
  const arr = [];
  let node = linkedList;
  let count = 0;
  while (node) {
    if (count > 100) throw new Error("List is too long");
    if (0 <= node.val <= 9) {
      arr.push(node.val);
      node = node.next;
    } else {
      throw new Error("value out of range");
    }
    count++;
  }
  const res = arr.reverse().join("");
  console.log(arr);
  console.log(res);
  return +res;
};
