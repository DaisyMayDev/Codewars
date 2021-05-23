// Personalized Message:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

  const name = `Daniel`;
  const owner = `Daniel`;

  function greet(name, owner) {
    if (name === owner) {
      return `Hello boss`;
    } else {
      return `Hello guest`;
    }
  }

  console.log(greet(name, owner));

  //Output to console ->  Hello boss
