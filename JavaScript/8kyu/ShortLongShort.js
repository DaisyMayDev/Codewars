//Short Long Short:
//Given 2 strings, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside.

let x = '45';
let y = '1';

function solution(a, b){

  if (a.length > b.length) {
    return `${b}${a}${b}`;
  } else {
    return `${a}${b}${a}`;    
  }
}

console.log(`'${x}' and '${y}' in a string as short-long-short is '${solution(x, y)}'`);

//Output to Console  -> '45' and '1' in a string as short-long-short is '1451'
