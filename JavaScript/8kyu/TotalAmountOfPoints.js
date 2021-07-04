//Total Amount of Points:
//Write a function that takes the result of each match ("x:y") and counts the points of our team in the championship. Rules for counting points for each match are win = 3pts, lose = 0pts and draw = 1pt.

const games = ['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'];

function points(games) {
  let points = 0;
  let x = 0;
  let y = 0;

  for (let a = 0; a < games.length; a++) {
    x = games[a].split(`:`)[0];
    y = games[a].split(`:`)[1];

    if (x > y) {
      points += 3;
    } else if (x === y) {
      points += 1;
    }
  }
  return points;
}

console.log(`The teams total points: ${points(games)}`);

//Output to Console ->  The teams total points: 30
