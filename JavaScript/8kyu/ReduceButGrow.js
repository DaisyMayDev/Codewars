// Reduce But Grow:
// Given a non-empty array of integers, return the result of multiplying the values together in order.

const x = [1, 2, 3, 4];

function grow(x) {
  let multiply = 1;
  for (let a = 0; a < x.length; a++) {
    multiply *= x[a];
  }
  return multiply;
}

console.log(`The values ${x} multiplied together in order are ${grow(x)}.`);

//Output to console ->  The values 1,2,3,4 multiplied together in order are 24.
