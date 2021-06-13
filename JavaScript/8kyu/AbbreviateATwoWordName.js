//Abbreviate a Two Word Name:
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. 
//The output should be two capital letters with a dot separating them.

const name = `Sam Harris`;

function abbrevName(name) {
  let initials = `${name.match(/\b(\w)/g)}`;
  let abbreviated = `${initials.replace(/,/g, '.').toUpperCase()}`;
  return abbreviated;
}

console.log(`The name ${name} abbreviated is ${abbrevName(name)}`);

//Output to Console ->  The name Sam Harris abbreviated is S.H
