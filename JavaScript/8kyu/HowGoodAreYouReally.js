//How Good are you Really:
//You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False.

const classPoints = [100, 40, 34, 57, 29, 72, 57, 88];
const yourPoints = 75;

function betterThanAverage(classPoints, yourPoints) {
  let sum = yourPoints;

  for (let a = 0; a < classPoints.length; a++) {
    sum += classPoints[a];
  }
  let avg = sum / (classPoints.length + 1);

  if (yourPoints > avg) {
    return true;
  } else {
    return false;
  }
}

console.log(`Your score is ${75}. Everyone else scored ${classPoints}. Did you score higher than the class average: ${betterThanAverage(classPoints, yourPoints)}`);

//Output to Console ->  Your score is 75. Everyone else scored 100,40,34,57,29,72,57,88. Did you score higher than the class average: true
