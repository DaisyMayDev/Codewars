//Convert Number to Reversed Array of Digits:
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const n = 348597;

function digitize(n) {
  let reversed = String(n).split('').reverse().map(Number);
  return reversed;
}

console.log(digitize(n));

//Output to Console ->  [7,9,5,8,4,3]
