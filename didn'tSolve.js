//Connect 4
//"https://www.codewars.com/kata/586c0909c1923fdb89002031/train/javascript"

function Connect4 (){
  this.grid = Array.from(new Array(6), () => new Array(7).fill(0));
  this.players = [{
    name: "Player 1",
    score: 0,
    disk: 1
  }, {
    name: "Player 2",
    score: 0,
    disk: 2
  }];
  this.currPlayer = this.players[0];
  this.directions = {
    left: [0, -1],      //[nextRowOffset, nextColOffset]
    leftDown: [1, -1],
    down: [1, 0],
    rightDown: [1, 1],
    right: [0, 1]
  }
  this.gameIsFinished = false;
};

Connect4.prototype.switchPlayer = function() {
  this.currPlayer = this.players.find(el => el.name != this.currPlayer.name);
}

Connect4.prototype.play = function (col){
  console.log("currCol " + col) 
  let isFull = true;
  let currPos = { row: null, col: null };
  
  if (this.gameIsFinished) {
    console.log("Game has finished!");
    return "Game has finished!";
  }
  
  for(let i = this.grid.length - 1; i >= 0; i--) {
    if (this.grid[i][col] === 0) {
      isFull = false;
      this.grid[i][col] = this.currPlayer.disk;
      currPos.row = i;
      currPos.col = col;
      break;
    }
  }
  console.log(this.grid, currPos)
  if(isFull) {
    this.switchPlayer();
    console.log("Column full!")
    return "Column full!";
  }
  
  for (let key in this.directions) {
    let [rowOffset, colOffset] = this.directions[key];
    let nextPos = { row: currPos.row, col: currPos.col };
    let nextDisk = this.currPlayer.disk;
    
    while(
      this.grid[nextPos.row] &&
      nextDisk === this.grid[nextPos.row][nextPos.col]
    ) {
      //console.log(this.grid[nextPos.row][nextPos.col], nextPos, key, rowOffset, colOffset)
      this.currPlayer.score++;
      nextPos.row += rowOffset;
      nextPos.col += colOffset;
      if(this.currPlayer.score === 4) {
        console.log(this.currPlayer.name + " wins!");
        this.gameIsFinished = true;
        return this.currPlayer.name + " wins!";
      }
    }
    this.currPlayer.score = 0;
    //console.log(count, key, nextPos)
  }
  
  let message = this.currPlayer.name + " has a turn";
  console.log(message);
  this.switchPlayer();
  return message;
};