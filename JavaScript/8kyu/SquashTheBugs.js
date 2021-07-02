//Squash the Bugs:
//Eliminate all bugs from the code so that it runs and outputs the expected value. Output should be the length of the longest word, as a number.

const str = `The quick white fox jumped around the massive dog`;

function findLongest(str) {
  let spl = str.split(' ');
  let longest = 0;

  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

console.log(`The longest word is ${findLongest(str)} letters long`);

//Output to Console ->  The longest word is 7 letters long
