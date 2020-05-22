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
    console.log("====================================");
    console.log(
      "Top: " + this.top.value,
      "Next: " + JSON.stringify(this.top.next),
      "Bottom: " + JSON.stringify(this.bottom),
      "Length: " + this.length
    );
    console.log("====================================");
  }
  //remove top of stack
  pop() {
    if (!this.top) {
      return console.log("empty stack");
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    let temp = this.top; // hold top to be deleted
    this.top = temp.next; //set top to nect
    this.length--; //decrement

    console.log("====================================");
    console.log(this);
    console.log("====================================");
    this.printList();
  }

  printList() {
    console.log(this);
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push(5);

// myStack.push(10);
// myStack.push(20);
// myStack.push(11);
// myStack.push(45);

myStack.pop();
// myStack.pop();
// myStack.pop();
// // myStack.push(9);

// myStack.pop();
