// Area or Perimeter:
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. 
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const l = 7;
const w = 4;

const areaOrPerimeter = function (l, w) {
  if (l === w) {
    const area = l * w;
    return area;
  } else {
    const perimeter = l * 2 + w * 2;
    return perimeter;
  }
};

if (l === w) {
  console.log( `The polygon length is ${l} and width is ${w}, so it has an area of ${areaOrPerimeter(l,w)}.`);
} else {
  console.log(`The polygon length is ${l} and width is ${w}, so it has a perimeter of ${areaOrPerimeter(l,w)}.`);
}

//Output to the console ->  The polygon length is 7 and width is 4, so it has a perimeter of 22.
