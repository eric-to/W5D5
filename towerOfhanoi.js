const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(towers = [[1,2,3], [], []]) {
    this.towers = towers;
  }

  promptMove(callback) {
    console.log(this.towers);
    if (this.isWon() === true) {
      reader.close();
      console.log('You won!');
      return;
    }
    reader.question("enter starting position? ", function(startTowerIdx) {
      reader.question("enter ending position? ", function(endTowerIdx) {
        let start = parseInt(startTowerIdx);
        let end = parseInt(endTowerIdx);

        callback(start, end);
      });
    });
  }

  move(startTowerIdx, endTowerIdx) {

    let startTower = this.towers[startTowerIdx];
    let endTower = this.towers[endTowerIdx];

    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      endTower.unshift(startTower.shift());
    } else {
      console.log('invalid move');
    }

    // this.print();
    this.promptMove(this.move.bind(this));
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    let startTower = this.towers[startTowerIdx];
    let endTower = this.towers[endTowerIdx];
    if (startTower.length === 0) {
      return false;
    } else if (startTower[0] > endTower[0]) {
      return false;
    } else {
      return true;
    }
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    let firstTowerIsEmpty = (this.towers[0].length === 0);
    let otherTowersFull = (this.towers[1].length === 3 || this.towers[2].length === 3);
    return firstTowerIsEmpty && otherTowersFull;
  }

  run() {
    // while(this.isWon() != true) {
    //   this.promptMove(this.move.bind(this));
    // }
    this.promptMove(this.move.bind(this));
  }
}

const game = new Game();
game.run();
