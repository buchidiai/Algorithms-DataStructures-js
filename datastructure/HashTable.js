class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //create hash index/address
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);

    //if data doesnt exists create empty array
    if (!this.data[address]) {
      this.data[address] = [];
    }

    //if data exists already push onto it
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    //address/index of data
    const address = this._hash(key);

    //bucket of data
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    console.log(keysArray);

    return keysArray;
  }
}

module.exports = HashTable;

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("oranges", 54);
myHashTable.set("watermelon", 6000);
myHashTable.set("apples", 9);
myHashTable.set("apples", 90);

myHashTable.get("apples");

// myHashTable.keys();
