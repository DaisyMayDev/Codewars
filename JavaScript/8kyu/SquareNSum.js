// Square(n) Sum:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const numbers = [1, 2, 3];

function squareSum(numbers) {
  let squared = [];
  let sum = 0;
  for (let a = 0; a < numbers.length; a++) {
    squared.push(numbers[a] ** 2);
  }

  for (let b = 0; b < squared.length; b++) {
    sum += squared[b];
  }

  return sum;
}
console.log(`Each element in the array ${numbers} squared and added together is ${squareSum(numbers)}.`);

//Output to Console ->  Each element in the array 1,2,3 squared and added together is 14.
