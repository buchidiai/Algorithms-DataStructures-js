class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
    // console.log(this.head);
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    //add new value to tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    console.log(this);
    return this;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(19);
myLinkedList.append(33);
myLinkedList.append(55);
