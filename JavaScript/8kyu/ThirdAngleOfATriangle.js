//Third Angle of a Triangle:
//You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.

let a = 43;
let b = 78;

function otherAngle(a, b) {
  return 180 - a - b;
}

console.log(
  `Angle a = ${a} and angle b = ${b}, so angle c = ${otherAngle(a, b)}`
);

//Output to Console ->  Angle a = 43 and angle b = 78, so angle c = 59
