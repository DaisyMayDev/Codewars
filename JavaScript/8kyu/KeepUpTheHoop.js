//Keep up the Hoop:
//Write a program where Alex can input how many times the hoop goes round. If it is 10 or more, return "Great, now move on to tricks", else return "Keep at it until you get it".

const n = 11;

function hoopCount(n) {
  if (n >= 10) {
    return `Great, now move on to tricks`;
  } else {
    return `Keep at it until you get it`;
  }
}

console.log(`The hoop went round ${n} times. ${hoopCount(n)}`);

//Output to Console ->  The hoop went round 11 times. Great, now move on to tricks
