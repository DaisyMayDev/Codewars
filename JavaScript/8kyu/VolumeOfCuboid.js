// Volume of a Cuboid:
// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

const cuboidLength = 6.3;
const cuboidWidth = 2;
const cuboidHeight = 5;

function getVolumeOfCuboid(length, width, height) {
  return length * width * height;
}

console.log(`Length: ${cuboidLength}, Width: ${cuboidWidth}, Height: ${cuboidHeight}. The total volume is ${getVolumeOfCuboid(cuboidLength, cuboidWidth, cuboidHeight)}.`);

//Output to console ->  Length: 6.3, Width: 2, Height: 5. The total volume is 63.
