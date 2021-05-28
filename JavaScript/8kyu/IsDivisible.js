// Is n divisible by x and y:
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

const n = 24;
const x = 3;
const y = 2;

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`Is ${n} divisible by ${x} and ${y}? ${isDivisible(n, x, y)}`);

//Output to console ->  Is 24 divisible by 3 and 2? true
