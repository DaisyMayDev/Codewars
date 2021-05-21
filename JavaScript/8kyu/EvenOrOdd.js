// Even or Odd:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const number = 873;

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return `even`;
  } else {
    return `odd`;
  }
}

console.log(`The number ${number} is ${evenOrOdd(number)}.`);

//Output in console ->  The number 873 is odd.
