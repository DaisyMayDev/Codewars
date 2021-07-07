//Can we Divide it:
//Your task is to create a function to check if an integer number is divisible by each of the two arguments.

const number = 282;
const a = 2;
const b = 6;

function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`Is the number ${number} divisible by ${a} and ${b}? ${isDivideBy(number, a, b)}`);

//Output to Console ->  Is the number 282 divisible by 2 and 6? true
