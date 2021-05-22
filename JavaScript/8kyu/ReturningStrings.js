// Returning Strings:
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

const name = `Jess`;

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(`${greet(name)}`);

//Output to console ->  Hello, Jess how are you doing today?
