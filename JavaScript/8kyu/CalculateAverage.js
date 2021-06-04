//Calculate Average:
//Write a function which calculates the average of the numbers in a given list.

const array = [1, 2, 3];

function find_average(array) {
  let sum = 0;
  for (let a = 0; a < array.length; a++) {
    sum += array[a];
  }
  let average = sum / array.length;

  if (array.length === 0) {
    return 0;
  } else {
    return average;
  }
}

console.log(
  `The average value of the array ${array} is ${find_average(array)}.`
);

//Output to Console ->  The average value of the array 1,2,3 is 2.
