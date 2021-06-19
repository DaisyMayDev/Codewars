//Is he Gonna Survive:
//Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry. 
//Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

const bullets = 100;
const dragons = 40;

function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

console.log(`With ${bullets} bullets and ${dragons} dragons, will the hero survive: ${hero(bullets, dragons)}`);

//Output to Console ->  With 100 bullets and 40 dragons, will the hero survive: true
