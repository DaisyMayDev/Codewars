// How many Lightsabers:
// Write a function that accepts the name of a person and returns the number of lightsabers the person has. The only person who owns lightsabers is Zach who has 18, and everyone else owns 0. Your function should have a default parameter.

const name = `Zach`;

function howManyLightsabersDoYouOwn(name) {
  switch (name) {
    case `Zach`:
      return 18;
      break;
    default:
      return 0;
  }
}

console.log(`${name} has ${howManyLightsabersDoYouOwn(name)} lightsabers.`);

//Output to console ->  Zach has 18 lightsabers.
