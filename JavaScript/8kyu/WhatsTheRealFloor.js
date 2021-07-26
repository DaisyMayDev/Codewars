//What's the Real Floor:
//In American buildings, the first floor is actually the ground floor and there is no 13th floor. Write a function that given the American floor,
//returns the floor in the European system.

let n = 12;

function getRealFloor(n) {
  let floor = n-1;

  if (n >= 13) {
    floor = n-2
  } 
  
  if (n <= 0) {
    floor = n;
  }   
  
  return floor;
}

console.log(`Floor ${n} in America would be floor ${getRealFloor(n)} in Europe`);

//Output to Console  -> Floor 12 in America would be floor 11 in Europe
