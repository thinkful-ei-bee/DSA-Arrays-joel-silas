const mem = require('./memory.js');
const memory = new mem();

class Array {
  constructor() {
    this.length = 0;
    this.capacity = 0;
    // this.memory = new memory();
    this.pointer = memory.allocate(this.length);
  }

  push(value) {
    this._resize(this.length + 1);
    memory.set(this.pointer + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPointer = this.pointer;
    this.pointer = memory.allocate(size);
    if (this.pointer === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.pointer, oldPointer, this.length);
    memory.free(oldPointer);
  }



}

module.exports = Array;