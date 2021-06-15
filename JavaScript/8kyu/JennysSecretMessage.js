//Jenny's Secret Message:
//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different.
//She added a special case to her function, but she made a mistake.

const name = `Johnny`;

function greet(name) {
  if (name === 'Johnny') {
    return 'Hello, my love!';
  } else {
    return 'Hello, ' + name + '!';
  }
}

console.log(greet(name));

//Output to Console ->  Hello, my love!
