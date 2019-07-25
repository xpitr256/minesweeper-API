'use strict';

let Board = require('./Board.js');

class Game {

  constructor(board) {
    this.restartGame(board)
  }

  reveal(x, y) {
    this.board.reveal(x,y);
    this.updateGameStatus();
  }

  updateGameStatus() {

    if (this.board.doIHaveAnUncoveredBomb()) {
      this.status = 'LOST' ;
    }

    if (this.board.allEmptyCellsAreUncovered()) {
      this.status = 'WON' ;
    }
  }

  isInStatus(askedStatus) {
    return this.status === askedStatus;
  }

  isCreated() {
    return this.created !== undefined;
  }

  restartGame(board){
    this.status = 'STARTED' ;
    this.created = new Date();
    this.board = board ? board : new Board();
  }
}

module.exports = new Game();
