class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return console.log(this.array[this.array.length - 1]);
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();

myStack.push(5);
myStack.push(10);
myStack.push(20);
myStack.push(11);
myStack.push(45);

myStack.peek();

// myStack.pop();
// myStack.pop();
// myStack.pop();
// // myStack.push(9);

// myStack.pop();
