class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return console.log(this.first);
  }
  //tim - john - mike
  enqueue(value) {
    let node = new Node(value); //instanciate node wit value

    if (!this.first) {
      this.first = node; //set node to first
      this.last = node; //set node to last
    } else {
      node.next = node;
      this.last.next = node;
      this.last = node;
    }

    this.length++; //increment
  }
  dequeue() {
    //remove from begining of queue
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }

    const holdingPointer = this.first;
    this.first = holdingPointer.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();

myQueue.enqueue(2);
myQueue.enqueue(6);
myQueue.enqueue(9);
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
