//Data Reverse
//"https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript"

function dataReverse(data) {
  let result = [];
  for (let i =  data.length - 8; i >= 0; i -= 8) {
    let temp = data.slice(i, i + 8);
    result = result.concat(temp);
  }
  
  return result;
}

//Midpoint Sum
//"https://www.codewars.com/kata/54d3bb4dfc75996c1c000c6d/train/javascript"

function midpointSum(n) {
  for (let i = 1; i < n.length - 1; i++) {
    let prev = n.slice(0, i).reduce((accum, el) => accum + el);
    let past = n.slice(i + 1, n.length).reduce((accum, el) => accum + el);
    if (prev === past) return i;
  }
}