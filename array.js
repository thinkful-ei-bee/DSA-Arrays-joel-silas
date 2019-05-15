const memory = require('./memory.js');

class Array {
  constructor() {
    this.length = 0;
    this.capacity = 0;
    this.memory = new memory();
    this.pointer = this.memory.allocate(this.length);
  }

  

}

module.exports = Array;