module.exports = class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  setNext(node) {
    this.next = node;
  }
};
