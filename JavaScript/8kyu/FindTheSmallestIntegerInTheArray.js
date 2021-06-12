//Find the Smallest Integer in the Array:
//Given an array of integers your solution should find the smallest integer.

const args = [34, -345, -1, 100];

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for (let a = 0; a < args.length; a++) {
      if (args[a] < smallest) {
        smallest = args[a];
      }
    }
    return smallest;
  }
}

console.log(
  `The smallest integer in the array ${args} is ${findSmallestInt(args)}.`
);

//Output to Console ->  The smallest integer in the array 34,-345,-1,100 is -345.
