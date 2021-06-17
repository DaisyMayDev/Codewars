//DNA to RNA Conversion:
//Create a function which translates a given DNA string into RNA.

const dna = `GCAT`;

function DNAtoRNA(dna) {
  let replace = dna.split('');
  let rna = ``;

  for (let a = 0; a < replace.length; a++) {
    if (replace[a] === `T`) {
      rna += `U`;
    } else {
      rna += replace[a];
    }
  }
  return rna;
}

console.log(`The DNA squence ${dna} has been turned into the following RNA sequence ${DNAtoRNA(dna)}.`);

//Output to Console ->  The DNA squence GCAT has been turned into the following RNA sequence GCAU.
