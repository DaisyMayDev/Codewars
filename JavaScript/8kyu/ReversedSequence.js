//Reversed Sequence:
//Build a function that returns an array of integers from n to 1 where n>0

const n = 5;

const reverseSeq = n => {
  let reverse = [];
  for (let a = n; a > 0; a--) {
    reverse.push(a);
  }
  return reverse;
};

console.log(`The sequence counting down from ${n} is ${reverseSeq(n)}`);

//Output to Console ->  The sequence counting down from 5 is 5,4,3,2,1
