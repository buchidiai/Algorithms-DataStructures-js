class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  //stack implemented with linked list
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  //see top element
  peek() {
    return this.top;
  }
  //add to top of stack
  push(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      let temp = this.top; //hold previous top
      this.top = node; //set top to new node
      this.top.next = temp; //set next to previous node
    }

    this.length++;
  }
  //remove top of stack
  pop() {
    if (this.length > 1) {
      let temp = this.top; // hold top to be deleted
      this.top = temp.next; //set top to nect
      this.length--; //decrement

      console.log("====================================");
      console.log(this);
      console.log("====================================");
    } else {
      return console.log("empty stack");
    }
  }

  printList() {
    console.log(this);
  }
  //isEmpty
}

const myStack = new Stack();

// myStack.push(5);
// myStack.push(10);
// myStack.push(20);
// myStack.push(11);
// myStack.push(45);

myStack.pop();
// myStack.push(9);
