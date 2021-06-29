//Find Divisible By Given Number:
//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.

const numbers = [1, 2, 3, 4, 5, 6];
const divisor = 2;

function divisibleBy(numbers, divisor) {
  let divisable = [];

  for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] % divisor === 0) {
      divisable.push(numbers[a]);
    }
  }
  return divisable;
}

console.log(`The numbers in [${numbers}] that are divisable by ${divisor} are: ${divisibleBy(numbers, divisor)}`);

//Output to Console ->  The numbers in [1,2,3,4,5,6] that are divisable by 2 are: 2,4,6
