// Will You Make It:
// Write a function that tells you if it is possible to make it to the pump or not.

const distanceToPump = 50;
const mpg = 25;
const fuelLeft = 2;

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  let milesLeft = distanceToPump / mpg;
  let canIMakeIt = false;

  if (milesLeft <= fuelLeft) {
    canIMakeIt = true;
  } else {
    canIMakeIt = false;
  }
  return canIMakeIt;
}

console.log(`The distance to the pump is ${distanceToPump} miles, and your fuel left is ${fuelLeft} gallons. Will you make it? ${zeroFuel(distanceToPump, mpg, fuelLeft)}`);

//Output to Console ->  The distance to the pump is 50 miles, and your fuel left is 2 gallons. Will you make it? true
