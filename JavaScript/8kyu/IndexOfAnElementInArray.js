//Index of an Element in Array:
//Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise.

const a = [2, 3, 5, 7, 11];
const e = 5;



const find = (a, e) => (a.includes(e) ? a.indexOf(e) : `Not found`);



if (find(a, e) === `Not Found`) {
  console.log(`The element ${e} was ${find(a, e)} in the array.`);
} else {
  console.log(`The element ${e} was found at index ${find(a, e)} in the array.`);
}

//Output to Console ->  The element 5 was found at index 2 in the array.
