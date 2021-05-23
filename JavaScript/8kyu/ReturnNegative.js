// Return Negative:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const num = 62;

function makeNegative(num) {
  if (num === 0) {
    return 0;
  } else if (num < 0) {
    return num;
  } else {
    const newNum = Number(`-${num}`);
    return newNum;
  }
}

console.log(`${num} reversed is ${makeNegative(num)}`);

//Output to console ->  62 reversed is -62
