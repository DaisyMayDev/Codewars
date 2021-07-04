//Clock:
// The clock shows the hours, minutes and seconds after midnight.Your task is to write a function which returns the time since midnight in milliseconds.

const h = 1;
const m = 24;
const s = 47;

function past(h, m, s) {
  return s * 1000 + m * 60000 + h * 3600000;
}

console.log(`The time since midnight is ${past(h, m, s)} miliseconds`);

//Output to Console ->  The time since midnight is 5087000 miliseconds
