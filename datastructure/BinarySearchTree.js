class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here

    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        //right
        if (value > currentNode.value) {
          //if there is not an element to the right of the root Node
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          currentNode = currentNode.right;
        } else {
          //left
          //if there is not an element to the left of the root Node
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        }
      }
    }

    console.log(this);
  }
  lookup(value) {
    //Code here

    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    //loop while theres still a current node
    while (currentNode) {
      if (value < currentNode.value) {
        //go left to search
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        //go right to search
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //return value if its found
        return console.log(currentNode);
      }
    }
    return null;
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
// tree.insert(1);
JSON.stringify(traverse(tree.root));

tree.lookup(15);
tree.lookup(900);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return console.log(tree);
}
