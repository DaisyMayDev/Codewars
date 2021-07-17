//Stringy Strings:
//Write a function that takes a size and returns a string of alternating '1s' and '0s'. The string should start with a 1.

let size = 5;

function stringy(size) {
    let string = '';
    for (let a = 1; a <= size; a++) {
        if(a % 2 !== 0) {
            string += '1'; 
        } else {
            string += '0';
        }
    }
    return string;
}

console.log(`The string with a size of ${size} is ${stringy(size)}`);

//Output to Console  -> The string with a size of 5 is 10101.
