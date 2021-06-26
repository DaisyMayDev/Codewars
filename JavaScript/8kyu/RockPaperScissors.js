//Rock Paper Scissors:
//Let's play! You have to return which player won! In case of a draw return Draw!

const p1 = `scissors`;
const p2 = `rock`;

const rps = (p1, p2) => {
  if (p1 === `rock`) {
    if (p2 === `rock`) {
      return `Draw!`;
    } else if (p2 === `paper`) {
      return `Player 2 won!`;
    } else if (p2 === `scissors`) {
      return `Player 1 won!`;
    }
  } else if (p1 === `paper`) {
    if (p2 === `rock`) {
      return `Player 1 won!`;
    } else if (p2 === `paper`) {
      return `Draw!`;
    } else if (p2 === `scissors`) {
      return `Player 2 won!`;
    }
  } else if (p1 === `scissors`) {
    if (p2 === `rock`) {
      return `Player 2 won!`;
    } else if (p2 === `paper`) {
      return `Player 1 won!`;
    } else if (p2 === `scissors`) {
      return `Draw!`;
    }
  }
};

console.log(`Player 1 chose ${p1} and player 2 chose ${p2}. ${rps(p1, p2)}`);

//Output to Console ->  Player 1 chose scissors and player 2 chose rock. Player 2 won!
