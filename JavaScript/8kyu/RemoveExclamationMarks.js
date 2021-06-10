//Remove Exclamation Marks
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const s = `Wow! Hi There!`;

function removeExclamationMarks(s) {
  let noExclamations = `${s.replace(/!/g, '')}`;

  return noExclamations;
}

console.log(`The phrase '${s}' without exclamation marks is '${removeExclamationMarks(s)}'`);

//Output to console ->  The phrase 'Wow! Hi There!' without exclamation marks is 'Wow Hi There'
