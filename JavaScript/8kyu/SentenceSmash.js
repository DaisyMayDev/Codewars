//Sentence Smash:
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
//There shouldn't be a space at the beginning or the end of the sentence.

const words = ['hello', 'world'];

function smash(words) {
  'use strict';
  let string = '';

  for (let a = 0; a < words.length; a++) {
    if (a === 0) {
      string += words[a];
    } else {
      string += ` ${words[a]}`;
    }
  }
  return string;
}

console.log(`The array [${words}] made into a sentence is '${smash(words)}'`);

//Output to Console ->  The array [hello,world] made into a sentence is 'hello world'
