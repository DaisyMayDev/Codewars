// String Repeat:
// Write a function called repeatStr which repeats the given string string exactly n times.

const n = 5;
const s = `Hi`;

function repeatStr(n, s) {
  let string = ``;

  for (let x = 1; x <= n; x++) {
    string += s;
  }

  return string;
}

console.log(`${s} repeated ${n} times is ${repeatStr(n, s)}`);

//Output to console ->  Hi repeated 5 times is HiHiHiHiHi
