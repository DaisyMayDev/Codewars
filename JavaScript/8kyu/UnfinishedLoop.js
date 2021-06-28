//Unfinished Loop:
//Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

let number = 5;

function createArray(number) {
  let newArray = [];

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

console.log(createArray(number));

//Output to Console ->  [1, 2, 3, 4, 5]
