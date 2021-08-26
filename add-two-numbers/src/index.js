import UnLinkedList from "./UnLinkedList";
import convertToListNode from "./convertToListNode";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const reduceFn = (acc, curr) => {
  if (acc >= 10) {
  }
};

const addTwoNumbers = (l1, l2) => {
  const sumValues = [l1, l2]
    .map((list) => UnLinkedList(list))
    .reduce((acc, value) => acc + value);
  return convertToListNode(sumValues);
};
