//Dollars and Cents:
//You need to create a function that will take a float and return the amount formatting in dollars and cents, for example 39.99 becomes $39.99

let amount = 3.1;

function formatMoney(amount){
  return `$${(Math.round(amount * 100) / 100).toFixed(2)}`;
}

console.log(`The amount ${amount} in currency format is ${formatMoney(amount)}`);

//Output to Console  -> The amount 3.1 in currency format is $3.10
