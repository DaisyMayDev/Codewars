//Reversed Words:
//Complete the solution so that it reverses all of the words within the string passed in.

const str = `yoda doesn't speak like this`;

function reverseWords(str) {
  return String(str.split(` `).reverse().join(` `));
}

console.log(`'${str}' reversed is '${reverseWords(str)}'`);

//Output to Console -> 'yoda doesn't speak like this' reversed is 'this like speak doesn't yoda'
