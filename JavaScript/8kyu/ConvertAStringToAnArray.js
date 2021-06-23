//Convert a String to an Array:
//Write a function to split a string and convert it into an array of words.

const string = `I love arrays they are my favorite`;

function stringToArray(string) {
  return string.split(' ');
}

console.log(`The string '${string}' in an array is: [${stringToArray(string)}]`);

//Output to Console ->  The string 'I love arrays they are my favorite' in an array is: [I,love,arrays,they,are,my,favorite]
