// Remove First and Last Characters:
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.

const str = `Hello`;

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(
  `${str} with the first and last letters removed is ${removeChar(str)}.`
);

//Output to console ->  Hello with the first and last letters removed is ell.
