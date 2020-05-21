const Node = require("./Node");
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
    //initialize Node class
    let node = new Node(value, "singleLinkedList");

    //add new value to tail
    this.tail.next = node; //null
    this.tail = node; //new value & next is null
    this.length++;

    return this;
  }

  prepend(value) {
    //instance Node class
    let node = new Node(value, "singleLinkedList");

    //set next to existing head
    node.setNext(this.head);
    //set head to newNode
    this.head = node;
    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    //check index
    if (index >= this.length) {
      //add to end of list if index is > length
      return this.append(value);
    }

    //instance Node class
    let node = new Node(value, "singleLinkedList");

    //get node value of item located before index of insertion
    const leader = this.traverseToIndex(index - 1);

    console.log(leader, "leader");
    //node next value
    const holdingPointer = leader.next;

    console.log(holdingPointer, "holdingPointer");

    //insert new node
    leader.next = node;
    //point to next value
    node.setNext(holdingPointer);
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index >= this.length) {
      //add to end of list if index is > length
      return "Index not found";
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(22);
myLinkedList.append(19);
myLinkedList.append(33);
myLinkedList.append(55);
// myLinkedList.prepend(99);
// myLinkedList.insert(2, 198);
myLinkedList.remove(2);
myLinkedList.reverse();
