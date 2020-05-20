const Node = require("./Node");

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      pre: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    //initialize Node class
    let node = new Node(value, "doubleLinkList");

    node.previous = this.tail;
    //add new value to tail
    this.tail.next = node; //null
    this.tail = node; //new value & next is null
    this.length++;

    return console.log(this);
  }

  prepend(value) {
    //instance Node class
    let node = new Node(value);

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
    let node = new Node(value);

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
}

let myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(22);
// myDoublyLinkedList.append(19);
// myDoublyLinkedList.append(33);
// myDoublyLinkedList.append(55);
// // myDoublyLinkedList.prepend(99);
// // myDoublyLinkedList.insert(2, 198);
// myDoublyLinkedList.remove(2);
