//Get the Mean of an Array
//Return the average of the given array rounded down to its nearest integer.

const marks = [2, 2, 4, 4];

function getAverage(marks) {
  let sum = 0;
  for (let a = 0; a < marks.length; a++) {
    sum += marks[a];
  }
  const average = sum / marks.length;
  return average;
}

console.log(`The average mark for the array ${marks} is ${getAverage(marks)}.`);

//Output to Console -> The average mark for the array 2,2,4,4 is 3.
