// Are You Playing Banjo:
// Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo!

const name = `Rebecca`;

function areYouPlayingBanjo(name) {
  let banjo = ``;

  if (name.startsWith(`R`) || name.startsWith(`r`)) {
    banjo = `${name} plays banjo`;
  } else {
    banjo = `${name} does not play banjo`;
  }
  return banjo;
}
console.log(`${areYouPlayingBanjo(name)}.`);

//Output to console ->  Rebecca plays banjo.
