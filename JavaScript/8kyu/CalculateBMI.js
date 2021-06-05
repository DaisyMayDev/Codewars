//Calculate BMI:
// Write function bmi that calculates body mass index (bmi = weight / height2).

const weight = 50;
const height = 1.8;

function bmi(weight, height) {
  const bmi = weight / height ** 2;

  if (bmi <= 18.5) {
    return `Underweight`;
  } else if (bmi <= 25) {
    return `Normal`;
  } else if (bmi <= 30) {
    return `Overweight`;
  } else if (bmi > 30) {
    return `Obese`;
  }
}

console.log(`Your weight is ${weight}kg and your height is ${height}m which means you are ${bmi(weight, height)}.`);

//Output to Console ->  Your weight is 80kg and your height is 1.8m which means you are Underweight.
