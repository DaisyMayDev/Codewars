//Exclusive OR Logical Operator:
//Your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should return true if 
//exactly one of the two expressions evaluate to true, false otherwise.

let a = true;
let b = false;

function xor(a, b) {
  if ((a === true && b === false) || (b === true && a === false)) {
    return true;
  } else {
    return false;
  }
}

console.log(`XOR - A ${a} and a ${b} is ${xor(a, b)}`);

//Output to Console ->  XOR - A true and a false is true
