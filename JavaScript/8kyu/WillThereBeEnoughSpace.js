//Will There be Enough Space:
//Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, 
//he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

const cap = 100;
const on = 60;
const wait = 50;

function enough(cap, on, wait) {
  if (on + wait <= cap) {
    return 0;
  } else {
    return on + wait - cap;
  }
}

console.log(`The bus has a capacity of ${cap}. There are already ${on} people on the bus and another ${wait} waiting to get on. ${enough(cap, on, wait)} people wont fit`);

//Output to Console ->  The bus has a capacity of 100. There are already 60 people on the bus and another 50 waiting to get on. 10 people wont fit
