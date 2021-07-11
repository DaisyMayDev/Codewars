//The Feast of Many Beasts:
//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. 
//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

let beast = `seal`;
let dish = `spring roll`;

function feast(beast, dish) {

    if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)) {
      return true;
    } else {
      return false;
    }
  }

console.log(`The ${beast} wants to bring a ${dish}. Can they? ${feast(beast, dish)}`);

//Output to Console  -> The seal wants to bring a spring roll. Can they? true
