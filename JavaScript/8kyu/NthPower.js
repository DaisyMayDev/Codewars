//Nth Power:
//You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. 
//If N is outside of the array, then return -1.

let array = [1, 2, 3, 4];
let n = 2;

function index(array, n){
    if (array[n] === undefined) {
      return -1;
    } else {
    return array[n] ** n;
    }
  }

console.log(`The nth number in the array is ${array[n]}. This to the power of ${n} is ${index(array, n)}.`);

//Output to Console  -> The nth number in the array is 3. This to the power of 2 is 9.
