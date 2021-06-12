//Lost Without a Map:
//Given an array of integers, return a new array with each value doubled.

const x = [1, 2, 3];

function double(num) {
  return num * 2;
}

function maps(x) {
  var result = x.map(double);
  return result;
}

console.log(`The array ${x} with each value doubled is ${maps(x)}.`);

//Output to Console ->  The array 1,2,3 with each value doubled is 2,4,6.
