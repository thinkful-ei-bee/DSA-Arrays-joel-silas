const array = require('./array.js');

function main() {
  // do stuff ...

  

  let arr = new array();
  
  // 2.)
  arr.push(3);
  //console.log(arr);
  
  // length: 1 capacity: 3, pointer: 0
  
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  //console.log(arr);

  // length: 1 capacity: 12, pointer: 3
  // capicity changes because length plus one times ration so 3, 
  // change to 3 + 1 * 3
  // pointer changes because the memory location changed

  // 3.)
  arr.pop();
  arr.pop();
  arr.pop();
  //console.log(arr);

  // - The length is reduced by 3, the "end values" are technically
  // still in memory.
  // - capacity: does not change since our resize, it would be a 
  // wasted operation. As in very expensive.
  // - address: the pointer is 3 because we asked for more space in memory
  // so the pointer is "pointing" to where that new block of
  // memory starts. So the address would be 3 to 15.

  // 4.)
  console.log(arr.get(0));
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  console.log(arr.get(0));
  // - First item in array is "NaN", not a number. We specify our memory
  // in memory.js as an int. So this is a type error. So there is no 
  // dynamic typing.
  // - Purpose of resize method: Gets new memory address,
  // allocates new necessary size from the new memory address,
  // copies old data in to new memory space, starting from new memory
  // address, sets old pointer as free, and sets new capacity
}

// 5)
// O(n)
function parseUrl(url) {
  let newUrl = '';
  for (let i = 0; i < url.length; i++) {
    if (url[i] === ' ') {
      newUrl += '%20';
    }
    else {
      newUrl += url[i];
    }
  }

  console.log(newUrl);

}

// 6)
// O(n)
function filt(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

//parseUrl('www.thinkful.com /tauh ida parv een');
//filt([1,2,3,4,5,6,7,8,9,10], 9);

// 7.)
// O(n)
function maxSum(arr) {
  let sum = 0;
  let oldSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if(sum > oldSum) {
      oldSum = sum;
    }
  }
  return oldSum;
}
//console.log(maxSum([4, 6, -3, 5, -2, 1]));


