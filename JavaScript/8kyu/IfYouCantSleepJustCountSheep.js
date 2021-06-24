//If You Can't Sleep Just Count Sheep:
//Given a non-negative integer, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".

const num = 3;

let countSheep = function (num) {
  let sheep = '';

  for (let a = 1; a <= num; a++) {
    sheep += `${a} sheep...`;
  }
  return sheep;
};

console.log(countSheep(num));

//Output to Console ->  1 sheep...2 sheep...3 sheep...
