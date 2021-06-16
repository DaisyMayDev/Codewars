//Fake Binary:
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

const x = `45385593107843568`;

function fakeBin(x) {
  let digits = String(x).split('');
  let binary = ``;

  for (let a = 0; a < digits.length; a++) {
    if (digits[a] < 5) {
      binary += `0`;
    } else if (digits[a] >= 5) {
      binary += `1`;
    }
  }
  return binary;
}

console.log(`The string ${x} in fake binary is ${fakeBin(x)}.`);

//Output to Console ->  The string 45385593107843568 in fake binary is 01011110001100111.
