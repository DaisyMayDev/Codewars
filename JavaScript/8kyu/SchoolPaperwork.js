//School Paperwork:
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

const n = 5;
const m = 10;

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

console.log(`If all classmates need ${m} sheets and there are ${n} people, then she needs to copy ${paperwork(n, m)} sheets in total.`);

//Output to Console ->  If all classmates need 10 sheets and there are 5 people, then she needs to copy 50 sheets in total.
