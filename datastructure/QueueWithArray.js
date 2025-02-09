// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  add(node) {
    this.data.unshift(node);
    this.length++;
  }

  remove(node) {
    this.length--;
    return this.data.pop(node);
  }

  print() {
    console.log(this.data);
  }
}

module.exports = Queue;
