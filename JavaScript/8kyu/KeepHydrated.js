// Keep Hydrated:
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

const time = 9.5;

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(
  `Nathan drunk ${litres(time)} litres of water on his ${time} hour cycle.`
);

//Output to console ->  Nathan drunk 4 litres of water on his 9.5 hour cycle.
