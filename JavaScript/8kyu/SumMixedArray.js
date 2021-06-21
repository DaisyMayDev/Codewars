//Sum Mixed Array:
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.

const x = ['5', '0', 9, 3, 2, 1, '9', 6, 7];

function sumMix(x) {
  let sum = 0;
  for (let a = 0; a < x.length; a++) {
    sum += Number(x[a]);
  }
  return sum;
}

console.log(`The sum of the values in the array ${x} is ${sumMix(x)}.`);

//Output to Console ->  The sum of the values in the array 5,0,9,3,2,1,9,6,7 is 42.
