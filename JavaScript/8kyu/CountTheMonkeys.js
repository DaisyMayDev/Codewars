//Count The Monkeys:
//Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

const n = 10;

function monkeyCount(n) {
  let count = [];
  for (let a = 1; a <= n; a++) {
    count.push(a);
  }
  return count;
}

console.log(`Counting up to ${n}: ${monkeyCount(n)}.`);

//Output to Console ->  Counting up to 10: 1,2,3,4,5,6,7,8,9,10.
