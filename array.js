const memory = require('./memory.js');

class Array {
  constructor() {
    console.log('hi');
    this.length = 0;
    this.capacity = 0;
    this.pointer = memory.allocate(this.length);
  }


}

module.exports = Array;