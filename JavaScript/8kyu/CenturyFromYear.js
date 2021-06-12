//Century From Year:
//The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

const year = 1945;

function century(year) {
  return Math.ceil(year / 100);
}

console.log(`The year ${year} is in the ${century(year)} century.`);

//Output to Console ->  The year 1945 is in the 20 century.
