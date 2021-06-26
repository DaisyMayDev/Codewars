//Cockroach:
//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer.

const s = 1.08;

function cockroachSpeed(s) {
  let cm = s * 100000;
  let seconds = cm / 3600;

  return Math.floor(seconds);
}

console.log(`The speed ${s}km/hr converted is ${cockroachSpeed(s)}cm/s`);

//Output to Console ->  The speed 1.08km/hr converted is 30cm/s
