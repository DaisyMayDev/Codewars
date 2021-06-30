//If-Else Syntax Debug:
//While making a game, Greg decided to create a function to check if the user is still alive. But some errors were made. Can you fix it?

const health = -2;

function checkAlive(health) {
  if (health > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`Is user alive? ${checkAlive(health)}`);

//Output to Console ->  Is user alive? false
