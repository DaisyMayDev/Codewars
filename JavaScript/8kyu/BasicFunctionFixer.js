//Basic Function Fixer:
//I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number. 
//Can you help me fix it?

let num = 4;

function addFive(num) {
    let total = num + 5;
    return total;
}

console.log(`${num} + 5 = ${addFive(num)}`);

//Output to Console  -> 4 + 5 = 9
