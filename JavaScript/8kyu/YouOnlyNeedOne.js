//You Only Need One:
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

const a = [101, 45, 75, 105, 99, 107];
const x = 75;

function check(a, x) {
  return a.includes(x);
}

console.log(`Was ${x} found in the following array ${a}: ${check(a, x)}`);

//Output to Console ->  Was 75 found in the following array 101,45,75,105,99,107: true
