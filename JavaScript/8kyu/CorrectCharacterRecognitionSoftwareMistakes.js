//Correct Character Recognition Software Mistakes:
//Your task is correct the errors in the digitised text. You only have to handle the following mistakes: 5 = S, 0 = O, 1 = I

let string = '51NGAP0RE';

function correct(string) {
  
  let split = string.split('');
  
  for(let a = 0; a < split.length; a++) {
    if (split[a] === '5') {
      split[a] = 'S';
    } else if (split[a] === '0') {
      split[a] = 'O';
    } else if (split[a] === '1') {
      split[a] = 'I';
    } else {
      continue;
    }
  }
  return split.join('');
}

console.log(`The text '${string}' corrected is '${correct(string)}'.`);


//Output to console  -> The text '51NGAP0RE' corrected is 'SINGAPORE'.
