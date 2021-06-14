//Count Positives Sum Negatives:
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
//If the input array is empty or null, return an empty array.

const input = [5, -3, 28, -11, 53, -67];

function countPositivesSumNegatives(input) {
  let sum = 0;
  let count = 0;

  if (input === null || input.length === 0) {
    return [];
  } else {
    for (let a = 0; a < input.length; a++) {
      if (input[a] > 0) {
        count++;
      } else {
        sum += input[a];
      }
    }
  }
  return [count, sum];
}

console.log(`The amount of positive numbers and the sum of all negative numbers in the array ${input} are: ${countPositivesSumNegatives(input)}.`);

//Output to Console ->  The amount of positive numbers and the sum of all negative numbers in the array 5,-3,28,-11,53,-67 are: 3,-81.
