// Sum The Strings
// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

const a = `11`;
const b = `5`;

function sumStr(a, b) {
  const sum = Number(a) + Number(b);
  return `${sum}`;
}

console.log(`The sum of ${a} and ${b} is ${sumStr(a, b)}`);

//Output to console ->  The sum of 11 and 5 is 16

