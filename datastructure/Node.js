module.exports = class Node {
  constructor(value, type) {
    if (type === "doubleLinkList") {
      //doubly linked link list
      this.value = value;
      this.next = null;
      this.previous = null;
    } else {
      //single linked list
      this.value = value;
      this.next = null;
    }
  }

  setNext(node) {
    this.next = node;
  }
};
