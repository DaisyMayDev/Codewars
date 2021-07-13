//Traffic Light:
//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

let current = 'yellow';

function updateLight(current) {
  
    if (current === 'green') {
      return 'yellow';
    } else if (current === 'yellow') {
      return 'red';
    } else if (current === 'red') {
      return 'green';
    } 
}

console.log(`The light is currently ${current} and it is about to turn ${updateLight(current)}.`);

//Output to Console  -> The light is currently yellow and it is about to turn red.
