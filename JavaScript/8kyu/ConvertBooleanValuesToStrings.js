// Convert Boolean Values to Strings:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

const bool = false;

function boolToWord(bool) {
  return bool ? `Yes` : `No`;
}

console.log(`Is the bool variable true? ${boolToWord(bool)}`);

//Output in console ->  Is the bool variable true? No
