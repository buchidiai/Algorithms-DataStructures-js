class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    //add new value to tail
    this.tail.next = newNode; //null
    this.tail = newNode; //new value & next is null
    this.length++;

    // console.log(this);
    return this;
  }

  prepend(value) {
    //create node object
    const newNode = {
      value: value,
      next: null,
    };

    //set next to existing head
    newNode.next = this.head;
    //set head to newNode
    this.head = newNode;
    this.length++;

    return this;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(22);
myLinkedList.append(19);
myLinkedList.append(33);
myLinkedList.append(55);
myLinkedList.prepend(99);
