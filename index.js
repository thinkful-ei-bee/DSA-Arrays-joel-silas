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

// 8)
// O(n)
function mergeSortedArray(a, b) {
  const tempArray = [];
  while(a.length || b.length) {
    if(typeof a[0] === 'undefined') {
      tempArray.push(b[0]);
      b.splice(0,1);
    } 
    else if(a[0] > b[0]) {
      tempArray.push(b[0]);
      b.splice(0,1);
    } 
    else {
      tempArray.push(a[0]);
      a.splice(0,1);
    }
  }
  return tempArray;
}
//console.log(mergeSortedArray([4,6,7,8], [1,2,3,5,9]));

// 9)
// O(n^2)
function removeChars(str, chars) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (chars.includes(str[i])) {
      newStr += '';
    } 
    else {
      newStr += str[i];
    }
  }

  console.log(newStr);
  return newStr;
}

//removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');

// 10)
// O(n^2)
function products(arr, exclude, container) {
  let product = arr[0];

  if (exclude >= arr.length) {
    return container;
  }

  for (let i = 0; i < arr.length; i++) {
    //prodArr.push(arr.splice(i, 1))
    if (i !== exclude) {
      product *= arr[i];
    }
  }

  container.push(product);
  return products(arr, exclude + 1, container);
}

//console.log(products([1, 3, 9, 4], 0, []));

// 11.)
//
function searchArr(arr) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === 0) {
        arr[i] = clearRow(arr[i]);
        
        // j = arr[i].length;
      }
      //console.log('column: ' + arr[i][j]);
      console.log(arr[i][j])
    }
    
    
  }
  return arr;
}

function clearRow(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

let map = 
  [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
  ];

console.log(searchArr(map));