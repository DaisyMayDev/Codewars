//Count by X:
//Create a function with two arguments that will return an array of the first (n) multiples of (x). Assume both the given number and the number of times to count will be positive numbers greater than 0.

const n = 10;
const x = 2;

function countBy(x, n) {
  let z = [];

  for (let a = 1; a <= n; a++) {
    z.push(x * a);
  }
  return z;
}

console.log(`The first ${n} multiples of ${x} are: ${countBy(x, n)}`);

//Output to Console ->  The first 10 multiples of 2 are: 2,4,6,8,10,12,14,16,18,20
