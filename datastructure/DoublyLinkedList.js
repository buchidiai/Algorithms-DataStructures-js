const Node = require("./Node");

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    //initialize Node class
    let node = new Node(value, "doubleLinkList");

    //set value of previous
    node.previous = this.tail;
    //add new value to tail
    this.tail.next = node; //null
    this.tail = node; //new value & next is null
    this.length++;

    return console.log(this);
  }

  prepend(value) {
    //instance Node class
    let node = new Node(value, "doubleLinkList");

    //set next to existing head
    node.setNext(this.head);
    //set previous
    this.head.previous = node;
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

    //instance of Node class
    let node = new Node(value, "doubleLinkList");

    //get node value of item located before index of insertion
    const leader = this.traverseToIndex(index - 1);

    console.log(leader, "header");

    //node next value
    const follower = leader.next;

    console.log(follower, "follwer");

    //insert new node
    leader.next = node;
    //set previous node
    node.previous = leader;
    //set next node
    node.next = follower;

    follower.previous = node;
    console.log(follower.previous, "follower.previous");

    this.length++;
    console.log(this);

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
myDoublyLinkedList.printList();
myDoublyLinkedList.append(22);
myDoublyLinkedList.append(19);
myDoublyLinkedList.append(33);
myDoublyLinkedList.append(55);
myDoublyLinkedList.prepend(99);
myDoublyLinkedList.insert(2, 198);
// myDoublyLinkedList.remove(2);
myDoublyLinkedList.printList();
