//Array Plus Array:
// Return the sum of all elements in two different arrays.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7];

function arrayPlusArray(arr1, arr2) {
  let sumArray1 = 0;
  let sumArray2 = 0;

  for (let a = 0; a < arr1.length; a++) {
    sumArray1 += arr1[a];
  }

  for (let b = 0; b < arr2.length; b++) {
    sumArray2 += arr2[b];
  }

  let total = sumArray1 + sumArray2;

  return total;
}

console.log(
  `The sum of the following two arrays - ${arr1} and ${arr2} - is ${arrayPlusArray(
    arr1,
    arr2
  )}.`
);

//Output to Console ->  The sum of the following two arrays - 1,2,3 and 4,5,6,7 - is 28.
