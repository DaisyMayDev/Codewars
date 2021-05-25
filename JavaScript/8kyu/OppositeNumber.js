// Opposite Number:
// Very simple, given a number, find its opposite (minus/positive)

const number = 53;

function opposite(number) {
  if (number > 0) {
    const newNegativeNumber = `-${number}`;
    return Number(newNegativeNumber);
  } else if (number < 0) {
    const numberString = `${number}`;
    const newPositiveNumber = numberString.substring(1);
    return Number(newPositiveNumber);
  } else {
    return number;
  }
}

console.log(`The opposite of ${number} is ${opposite(number)}`);

//Output to console ->  The opposite of 53 is -53

