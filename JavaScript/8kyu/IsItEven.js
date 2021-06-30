//Is it Even:
//In this Kata we are passing a number (n) into a function. Your code will determine if the number passed is even (or not). 
//The function needs to return either a true or false.

const n = 0.5;

function testEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`Is ${n} even? ${testEven(n)}`);

//Output to Console ->  Is 0.5 even? false
