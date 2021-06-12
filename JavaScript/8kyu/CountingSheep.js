//Counting Sheep:
//We need a function that counts the number of sheep present in the array (true means present).

const arrayOfSheep = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true];

function countSheeps(arrayOfSheep) {
  let present = [];

  for (let a = 0; a < arrayOfSheep.length; a++) {
    if (arrayOfSheep[a] === true) {
      present.push(arrayOfSheep[a]);
    }
  }
  return present.length;
}

console.log(`The number of sheep present in the array is ${countSheeps(arrayOfSheep)}.`);

//Output to Console ->  The number of sheep present in the array is 17.
