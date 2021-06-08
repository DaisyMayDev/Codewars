//Do I Get a Bonus:
//Build a function that takes in two arguments. If bonus is true, the salary should be multiplied by 10, if bonus is false, the salary should stay the same.

const salary = 10000;
const bonus = true;

function bonusTime(salary, bonus) {
  if (bonus === true) {
    return salary * 10;
  } else {
    return salary;
  }
}

if (bonus === true) {
  console.log(`You earn £${salary}, and you get a bonus so you now make £${bonusTime(salary, bonus)}.`);
} else {
  console.log(`You don't get a bonus, so you still earn £${bonusTime(salary, bonus)}.`);
}

//Output to console ->  You earn £10000, and you get a bonus so you now make £100000.
