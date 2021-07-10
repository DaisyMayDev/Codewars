//My Head is at The Wrong End:
//You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

let arr = ["tail", "body", "head"];

function fixTheMeerkat(arr) {
  return arr.reverse();
}

console.log(`The meerkat (${arr}) is wrong, but it has been fixed now - ${fixTheMeerkat(arr)}`);

//Output to Console  -> The meerkat (tail,body,head) is wrong, but it has been fixed now - head,body,tail

