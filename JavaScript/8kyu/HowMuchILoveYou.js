//How Much I Love You:
//Return the correct phrase for the number of petals that have been torn

let nbPetals = 4;

function howMuchILoveYou(nbPetals) {
    let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    
    return phrases[(nbPetals - 1) % phrases.length];
  }
  
  console.log(`The phrase for ${nbPetals} torn petals is '${howMuchILoveYou(nbPetals)}'`);

  //Output to Console  -> The phrase for 4 torn petals is 'passionately'
