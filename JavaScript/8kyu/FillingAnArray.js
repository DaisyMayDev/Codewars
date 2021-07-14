//Filling an Array:
//Write a function that produces an array with the numbers 0 to N-1 in it.

let n = 5;

function arr(n) {
  let arr = [];
  
  for (let i = 0; i < n; i++) {
    arr.push(i); 
  }
  return arr;
} 

console.log(`An array from 0-${n-1} is [${arr(n)}]`);

//Output to console  -> An array from 0-4 is [0,1,2,3,4]
