//Cat Years Dog Years:
//Use the variable humanYears to calculate the cat and dogs their respective ages in cat years and dog years. For the cat, +15 for first year, +9 for second year and +4 for each year after.
//For the dog, +15 for first year, +9 for second year and +5 for each year after.

let humanYears = 5;

var humanYearsCatYearsDogYears = function(humanYears) {

  let catYears = 0;
  let dogYears = 0;

  for (let a = 1; a <= humanYears; a++) {    
    if (a === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (a === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
}


console.log(`The cat and dog are ${humanYears} in human years. The cat is ${humanYearsCatYearsDogYears(humanYears)[1]} in cat years, and the dog is ${humanYearsCatYearsDogYears(humanYears)[2]} in dog years.`);

//Output to console  -> The cat and dog are 5 in human years. The cat is 36 in cat years, and the dog is 39 in dog years.
