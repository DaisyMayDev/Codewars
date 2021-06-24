//Set Alarm:
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed 
//and the second parameter, vacation is true whenever you are on vacation. The function should return true if you are employed and not on vacation

const employed = true;
const vacation = false;

function setAlarm(employed, vacation) {
  if (employed === true && vacation === false) {
    return true;
  } else {
    return false;
  }
}

console.log(`Should I set my alarm: ${setAlarm(employed, vacation)}`);

//Output to Console ->  Should I set my alarm: true
