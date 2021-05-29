// Convert String to a Number:
// We need a function that can transform a string into a number.

const str = `357`;

let stringToNumber = function (str) {
  return Number(str);
};

console.log(
  `The string ${stringToNumber(str)} has been converted to a number.`
);

//Output to console ->  The string 357 has been converted to a number.
