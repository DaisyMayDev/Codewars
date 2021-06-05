// Sum Arrays:
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

const numbers = [1, 5.2, 4, 0, -1];

function sum(numbers) {
  let sum = 0;

  for (let a = 0; a < numbers.length; a++) {
    sum += numbers[a];
  }

  if (numbers.length == 0) {
    return 0;
  } else {
    return sum;
  }
}

console.log(`The sum of the numbers in the array ${numbers} are: ${sum(numbers)}.`);

//Output to Console ->  The sum of the numbers in the array 1,5.2,4,0,-1 are: 9.2.
