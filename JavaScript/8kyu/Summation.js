// Summation:
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const num = 7;

let summation = function (num) {
  let sum = 0;
  for (let count = 1; count <= num; count++) {
    sum += count;
  }
  return sum;
};

console.log(
  `The sum of all the positive numbers up to ${num} is ${summation(num)}.`
);

//Output to console -> The sum of all the positive numbers up to 7 is 28.
