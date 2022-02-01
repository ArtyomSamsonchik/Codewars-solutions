//Smallest possible sum 
//"https://www.codewars.com/kata/52f677797c461daaf7000740/train/javascript"

function solution(numbers) {
  let gcd =  numbers.reduce((first, second) => {
    let rest;
    while(true) {;
      rest = first % second;
    
      if (rest === 0) return second;
      else {
        rest = first % second;
        [first, second] = [second, rest];
      }
    }
  });
  
  return gcd * numbers.length;
}