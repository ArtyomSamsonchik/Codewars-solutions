//"Smallest possible sum "
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

//"Codewars style ranking system"
//"https://www.codewars.com/kata/51fda2d95d6efda45e00004e/solutions/javascript/me/best_practice"

function User() {
  this._range = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];
  this._index = 0;
  this.rank = this._range[this._index];
  this.progress = 0;
  
  this.incProgress = function (kataRank) {
    if (kataRank < -8 || kataRank > 8 || kataRank === 0) throw new Error();
    if (this.rank === 8) return;
    
    let diff = this._range.indexOf(kataRank) - this._index;
    if (diff === 0) {
      this.progress += 3;
    } else if (diff === -1) {
      this.progress += 1;
    } else if (diff > 0) {
      this.progress += 10 * diff * diff;
    }
    
    if (this.progress >= 100) {
      this._index += Math.trunc(this.progress / 100);
      this.rank = this._range[this._index];
      this.progress = this.progress % 100;
      
      if (this.rank >= 8) {
        this.rank = 8;
        this.progress = 0;
      }
    }
  }
}