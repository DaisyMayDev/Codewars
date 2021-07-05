//Sum Without Highest and Lowest Number:
//Sum all the numbers in the array except the highest and the lowest elements. If there is one or no elements, or the array is null, return 0.

const array = [6, 2, 1, 8, 10];

function sumArray(array) {
  if (array === null || array.length <= 1) {
    return 0;
  } else {
    let highest = array[0];
    let lowest = array[0];
    let sum = 0;

    for (let a = 0; a < array.length; a++) {
      if (array[a] > highest) {
        highest = array[a];
      }
      if (array[a] < lowest) {
        lowest = array[a];
      }
      sum += array[a];
    }
    return sum - highest - lowest;
  }
}

console.log(`The sum of the array without the highest and lowest numbers is: ${sumArray(array)}`);

//Output to Console ->  The sum of the array without the highest and lowest numbers is: 16
