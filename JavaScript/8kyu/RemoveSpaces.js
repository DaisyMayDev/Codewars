//Remove String Spaces
//Remove the spaces from the string, then return the resultant string.

const x = `Hello There World`;

function noSpace(x) {
  let noSpaces = `${x.replace(/\s/g, '')}`;

  return noSpaces;
}

console.log(`The phrase '${x}' without spaces is '${noSpace(x)}'`);

//Output to console ->  The phrase 'Hello There World' without spaces is 'HelloThereWorld'
