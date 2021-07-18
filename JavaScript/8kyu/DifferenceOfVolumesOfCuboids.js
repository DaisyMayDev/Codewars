//Difference of Volumes of Cuboids:
//You must find the difference of the cuboids' volumes regardless of which is bigger.

let a = [1, 4, 4];
let b = [9, 7, 2];

function findDifference(a, b) {
  
    let volumeA = a[0] * a[1] * a[2];
    let volumeB = b[0] * b[1] * b[2];
    
    if (volumeA > volumeB) {
      return volumeA - volumeB;
    } else {
      return volumeB - volumeA;
    }
}

console.log(`The difference between the two shapes volume is ${findDifference(a, b)}`);

//Output to Console  -> The difference between the two shapes volume is 110
