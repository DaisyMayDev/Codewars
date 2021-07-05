//Find the First Non Consecutive Number:
//Your task is to find the first element of an array that is not consecutive. If the whole array is consecutive then return null.

let arr = [1, 2, 3, 4, 6, 7, 8];

function firstNonConsecutive(arr) {
  let n = null;
  for (let a = 1; a < arr.length; a++) {
    if (arr[a] - arr[a - 1] === 1) {
      continue;
    } else {
      n = arr[a];
      break;
    }
  }
  if (n === null) {
    return null;
  } else {
    return n;
  }
}

console.log(`The first non consecutive number is ${firstNonConsecutive(arr)}`);

//Output to Console ->  The first non consecutive number is 6
