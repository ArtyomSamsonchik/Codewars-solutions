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

//Find The Parity Outlier
//"https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript"

function findOutlier(integers){
  let oddCount = [];
  let evenCount = [];
  
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 ? oddCount.push(integers[i]) : evenCount.push(integers[i]);
    if (evenCount.length && oddCount.length > 1) return evenCount[0];
    if (oddCount.length && evenCount.length > 1) return oddCount[0];
  }
}

//Reducing by steps
//"https://www.codewars.com/kata/56efab15740d301ab40002ee/train/javascript"

function gcdi(x,y) {
  let rest = x % y;
  return rest ? gcdi(y, rest) : Math.abs(y);
}

function lcmu(a, b) {
  a = Math.abs(a), b = Math.abs(b);
  let min = Math.min(a, b);
  for (let i = 2; i <= min; i++) {   
    if (!(a % i) && !(b % i)) {
      return  i * lcmu(a / i, b / i);
    }
  }
  return Math.abs(a * b);
}

function som(a, b) {
  return a + b;
}

function maxi(a, b) {
  return Math.max(a,b);
}

function mini(a, b) {
  return Math.min(a, b);
}

function operArray(fct, arr, init) {
  let result = [];
  
  arr.reduce((accum, el) => {
    accum = fct(accum, el);
    result.push(accum);
    return accum;
  }, init);
  
  return result;
}

//"Plenty of Fish in the Pond"
//"https://www.codewars.com/kata/5904be220881cb68be00007d/train/javascript"

function fish(shoal){
  let ptsToGrow = 4;
  let size = 1;
  let totalScore = 0;
  
  //make an array of score sums for equal weights
  //index = weight, value = sum of weights
  //'00111122226' = [0, 4, 8, , , 6]
  let scores = [...shoal].reduce((accum, el) => {
    accum[el] ? accum[el] += +el : accum[el] = +el;
    return accum;
  }, []);
  
  //index = size. Start from 1st size
  while(true) {
    if (scores[size]) totalScore += scores[size];    
    totalScore -= ptsToGrow;
    if (totalScore >= 0) {
      ptsToGrow += 4;
      size++;
    } else return size;
  }
}

//"Find the unique number"
//"https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript"

function findUniq(arr) {  
  for (let i of arr) {
    if (arr.indexOf(i) === arr.lastIndexOf(i)) return i;      
  }
}

//"Who likes it?"
//"https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript"

function likes(names) {
  let result = "";
  switch(names.length) {
      case 0:
        return "no one likes this";
      
      case 1:
        return names[0] + " likes this";
      
      case 2:
      case 3:
        return names.slice(0, -1).join(", ") +
          ` and ${names[names.length - 1]}` + 
          " like this";
      
      default:
        return names.slice(0, 2).join(", ") +
          ` and ${names.length - 2} others like this`;        
  }
}

//"Repeated Substring"
//"https://www.codewars.com/kata/5491689aff74b9b292000334/train/javascript"

function f(s) {
  let substr = "";
  
  for (let i = 0; i < s.length; i++) {
    substr += s[i];
    let copy = s.split(substr);
    
    if (copy.every(el => el === "")) {
      return [substr, copy.length - 1];
    }
  }
  
  return [s, 1];
}

//"Area of largest rectangle in grid"
//"https://www.codewars.com/kata/5e74588a25ba6800325e9233/train/javascript"

function largestRectangleInGrid(matrix) {
  let resultArr = [];
  let resultRow = new Array(matrix[0].length).fill(null);
  
//    Merging the following lines. Number 1 is added to prev value.
//    0 overwrites prev value. Num in result string = continuous column height.
  for (let i = 0; i < matrix.length; i++) {    
    resultRow = matrix[i].map((el, i) => el === 0 ? 0 : el + resultRow[i]);
    
//     Checking each substring in the result string with no 0 inside.
//     Finding ALL rectangles in each substring by moving start pos = j
//     and finding the highest rectangle height in the string.
    for (let j = 0; j < resultRow.length; j++) {
      if (resultRow[j] === 0) {
        continue;        
      }
//        j = rowStart, k = rowEnd
      for (let k = j; k < resultRow.length && resultRow[k] !== 0; k++) {
        let rectHeight = Math.min(...resultRow.filter((el, i) => {
          return i >= j && i <= k;
        }));       
        resultArr.push((k - j + 1) * rectHeight);
      }
  	}  	
	}
  return Math.max(...resultArr);
}