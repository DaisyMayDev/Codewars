// Grade Book:
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

const s1 = 65;
const s2 = 70;
const s3 = 59;

function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;

  if (average <= 100 && average >= 90) {
    return `A`;
  } else if (average < 90 && average >= 80) {
    return `B`;
  } else if (average < 80 && average >= 70) {
    return `C`;
  } else if (average < 70 && average >= 60) {
    return `D`;
  } else if (average < 60 && average >= 0) {
    return `F`;
  }
}

console.log(`Your grades are ${s1}, ${s2} and ${s3}. Grade achieved: ${getGrade(s1, s2, s3)}.`);

//Output to Console ->  Your grades are 65, 70 and 59. Grade achieved: D.
