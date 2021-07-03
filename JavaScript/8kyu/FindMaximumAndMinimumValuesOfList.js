//Find Maximum and Minimum Values of a List:
//Your task is to make two functions, max and min that find the highest and lowest number in that array.

const list = [4, 6, 2, 1, 9, 63, -134, 566];

let min = function (list) {
  let smallest = list[0];
  for (let a = 0; a < list.length; a++) {
    if (list[a] < smallest) {
      smallest = list[a];
    }
  }
  return smallest;
};

let max = function (list) {
  let biggest = list[0];
  for (let a = 0; a < list.length; a++) {
    if (list[a] > biggest) {
      biggest = list[a];
    }
  }
  return biggest;
};

console.log(`The biggest value in the array is ${max(list)} and the smallest is ${min(list)}`);

//Output to Console ->  The biggest value in the array is 566 and the smallest is -134
