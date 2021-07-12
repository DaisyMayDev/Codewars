//Count Odd Numbers Below n:
//Given a number n, return the number of positive odd numbers below n, EASY!

let n =  15023;

function oddCount(n){
    return Math.floor(n/2);
}
  
console.log(`There are ${oddCount(n)} positive odd numbers below ${n}`);

//Output to Console  -> There are 7511 positive odd numbers below 15023
