const mem = require('./memory.js');
const memory = new mem();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    // this.memory = new memory();
    this.pointer = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) { 
      this._resize((this.length + 1) * Array.SIZE_RATIO); 
    }
    //this._resize(this.length + 1);
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
    // revisit capacity here
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.pointer + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.pointer + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.pointer + index + 1, this.pointer + index, this.length - index);
    memory.set(this.pointer + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.pointer + index, this.pointer + index + 1, this.length - index - 1);
    this.length--;
  }
}

Array.SIZE_RATIO = 3;

module.exports = Array;

