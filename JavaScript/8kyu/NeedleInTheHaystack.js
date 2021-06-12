//A Needle in the Haystack:
//Write a function findNeedle() that takes an array full of junk but containing one "needle". After your function finds the needle it should return a message that says: "found the needle at position " plus the index it found the needle.

const haystack = [ 'hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk', ];

function findNeedle(haystack) {
  for (let a = 0; a < haystack.length; a++) {
    return `Found the needle at position ${haystack.indexOf('needle')}`;
  }
}

console.log(`${findNeedle(haystack)}.`);

//Output to Console ->  Found the needle at position 5.
