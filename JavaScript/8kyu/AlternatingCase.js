//Alternating Case:
//Create a function that changes each lowercase letter to uppercase, and each uppercase letter to lowercase.

String.prototype.toAlternatingCase = function () {

  let characters = this.split('');
  let newChar = [];

  for (let a = 0; a < characters.length; a++) {
    if (characters[a] === characters[a].toUpperCase()) {
       newChar.push(characters[a].toLowerCase());

  } else if (characters[a] === characters[a].toLowerCase()) {
       newChar.push(characters[a].toUpperCase());
    } else {
      continue;
    }
 }
  return newChar.join('');
}
