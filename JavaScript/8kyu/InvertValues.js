//Invert values:
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

const array = [1, -2, 3, -4, 5];

function invert(array) {
  let inverted = [];
  for (let a = 0; a < array.length; a++) {
    if (array[a] >= 0) {
      inverted.push(Number(`-${array[a]}`));
    } else {
      inverted.push(Number(Math.abs(array[a])));
    }
  }
  return inverted;
}

console.log(`The array ${array} inverted is ${invert(array)}`);

//Output to Console ->  The array 1,-2,3,-4,5 inverted is -1,2,-3,4,-5
