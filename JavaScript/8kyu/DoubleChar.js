//Double Char:
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

let str = 'abcd';

function doubleChar(str) {
  let split = str.split('');
  let doubleStr = [];
  
  for (let a = 0; a < split.length; a++) {
    doubleStr.push(split[a], split[a]);
  }
  return doubleStr.join('');
}

console.log(`The string '${str}' with each character duplicated is '${doubleChar(str)}'`);

//Output to Console  -> The string 'abcd' with each character duplicated is 'aabbccdd'
