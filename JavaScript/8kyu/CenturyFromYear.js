//Century From Year:
//The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

const year = 1945;

function century(year) {
  let century = 0;
  
  if (year >= 1 && year <= 100) {
    century = 1 + `st`;
  } else if (year >= 101 && year <= 200) {
    century = 2 + `nd`;
  } else if (year >= 201 && year <= 300) {
    century = 3 + `rd`;
  } else if (year >= 301 && year <= 400) {
    century = 4 + `th`;
  } else if (year >= 401 && year <= 500) {
    century = 5 + `th`;
  } else if (year >= 501 && year <= 600) {
    century = 6 + `th`;
  } else if (year >= 601 && year <= 700) {
    century = 7 + `th`;
  } else if (year >= 701 && year <= 800) {
    century = 8 + `th`;
  } else if (year >= 801 && year <= 900) {
    century = 9 + `th`;
  } else if (year >= 901 && year <= 1000) {
    century = 10 + `th`;
  } else if (year >= 1001 && year <= 1100) {
    century = 11 + `th`;
  } else if (year >= 1101 && year <= 1200) {
    century = 12 + `th`;
  } else if (year >= 1201 && year <= 1300) {
    century = 13 + `th`;
  } else if (year >= 1301 && year <= 1400) {
    century = 14 + `th`;
  } else if (year >= 1401 && year <= 1500) {
    century = 15 + `th`;
  } else if (year >= 1501 && year <= 1600) {
    century = 16 + `th`;
  } else if (year >= 1601 && year <= 1700) {
    century = 17 + `th`;
  } else if (year >= 1701 && year <= 1800) {
    century = 18 + `th`;
  } else if (year >= 1801 && year <= 1900) {
    century = 19 + `th`;
  } else if (year >= 1901 && year <= 2000) {
    century = 20 + `th`;
  } else if (year >= 2001 && year <= 2100) {
    century = 21 + `st`;
  }

  return century;
}

console.log(`The year ${year} is in the ${century(year)} century.`);

//Output to Console ->  The year 1945 is in the 20th century.
