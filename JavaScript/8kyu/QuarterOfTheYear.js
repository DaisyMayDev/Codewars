// Quarter of the Year:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const month = 8;

const quarterOf = month => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      return 1;
      break;
    case 4:
    case 5:
    case 6:
      return 2;
      break;
    case 7:
    case 8:
    case 9:
      return 3;
      break;
    case 10:
    case 11:
    case 12:
      return 4;
      break;
  }
};

console.log(`Month ${month} is in quarter ${quarterOf(month)}.`);

//Output to console ->  Month 8 is in quarter 3.
