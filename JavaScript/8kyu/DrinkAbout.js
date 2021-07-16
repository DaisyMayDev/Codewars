//Drink About:
//People of different ages drink different things. Make a function that receives the age, and returns what they drink.

let old = 17;

function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'toddy';
    } else if (old < 18) {
        return 'coke';
    } else if (old < 21) {
        return 'beer';
    } else if (old >= 21) {
        return 'whisky';
    } 
};

console.log(`At age ${old}, they drink ${peopleWithAgeDrink(old)}`);

//Output to Console  -> At age 17, they drink coke
