//Transportation on Vacation:
//You need a rental car - every day you rent the car costs $40. If you rent the car for 3+ days you get $20 off, for 7+ days you get $50 off. 
//Return the total amount for the number of days entered.

let d = 6;

function rentalCarCost(d) {
  let cost = d * 40;

  if (d >= 3 && d < 7) {
    cost -= 20;
  } else if (d >= 7) {
    cost -= 50;
  }
  return cost;
}

console.log(`The cost of transportation for ${d} days is $${rentalCarCost(d)}`);

//Output to Console ->  The cost of transportation for 6 days is $220
