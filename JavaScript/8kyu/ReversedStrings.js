// Reversed Strings:
// Complete the solution so that it reverses the string passed into it.

const str = 'world';

function solution(str) {
  let strReverse = str.split('').reverse().join('');

  return strReverse;
}

console.log(`The string '${str}' backwards is '${solution(str)}'.`);

//Output to Console -> The string 'world' backwards is 'dlrow'.
