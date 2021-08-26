import ListNode from "./ListNode";

const LinkedList = function (value) {
  this.head = new ListNode(value);
  this.tail = this.head;
  this.length = 1;
  this.append = (value) => {
    const newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  };
};

export default LinkedList;
