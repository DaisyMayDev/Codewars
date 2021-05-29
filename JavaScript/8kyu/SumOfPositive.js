// Sum of positive:
// You get an array of numbers, return the sum of all of the positives ones.

const array = [1, 2, -30, 4, -1];

function positiveSum(arr) {
  let negatives = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negatives.push(arr[i]);
    } else {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(
  `The sum of the positive numbers in this array [${array}] is ${positiveSum(
    array
  )}.`
);

//Output to console ->  The sum of the positive numbers in this array [1,2,-30,4,-1] is 7.
