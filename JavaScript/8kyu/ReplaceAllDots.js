//Replace all Dots:
//The code provided is supposed replace all the dots . in the specified String str with dashes -, but it's not working properly. Can you fix it?

let str = 'one.two.three';

let replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

console.log(`The string '${str}' when replacing the full stops with dashes is '${replaceDots(str)}'`);

//Output to Console  -> The string 'one.two.three' when replacing the full stops with dashes is 'one-two-three'
