//Get Age:
//When a child is asked how old they are, they may reply "1 year old" or "5 years old", etc.. The function should return their age as an int from 0 to 9.

let inputString = `4 years old`;

function getAge(inputString){
    return Number(inputString.split(' ', 1));
}

console.log(`From the string - '${inputString}' - the age of the child is ${getAge(inputString)}`);

//Output to Console  -> From the string - '4 years old' - the age of the child is 4.
