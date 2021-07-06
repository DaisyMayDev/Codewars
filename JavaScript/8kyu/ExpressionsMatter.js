//Expressions Matter:
//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, () in every possible combination.

const a = 1;
const b = 3;
const c = 1;

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a + b * c,
    a * (b + c),
    a * b + c,
    (a + b) * c
  );
}

console.log(`The highest value of the numbers - ${a}, ${b}, ${c} - using the '+' and '*' operators is ${expressionMatter(a, b, c)}`);

//Output to Console ->  The highest value of the numbers - 1, 3, 1 - using the '+' and '*' operators is 5
