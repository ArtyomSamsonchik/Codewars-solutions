//"Slope of a Line"
//"https://www.codewars.com/kata/53222010db0eea35ad000001/train/javascript"
function getSlope(p1, p2) {
  let y = p2[1] - p1[1];
  let x = p2[0] - p1[0];
  if (!x) return null;
  else return y / x;
}

//Find the divisors! 
//"https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript"
function divisors(integer) {
  let result = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) result.push(i);
  }
  return result.length ? result : `${integer} is prime`
};

//"Highest and Lowest"
//"https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript"

function highAndLow(numbers){
  numbers = numbers.split(" ").map(Number);
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}