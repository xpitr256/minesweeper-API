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
      this.status = 'LOST';
      this.finished = new Date();
    }

    if (this.board.allEmptyCellsAreUncovered()) {
      this.status = 'WON';
      this.finished = new Date();
    }
  }

  isInStatus(askedStatus) {
    return this.status === askedStatus;
  }

  isCreated() {
    return this.created !== undefined;
  }

  isFinished() {
    return this.finished !== undefined;
  }

  elapsedTimeInSeconds() {

    let lastTime = new Date();

    if (this.isFinished()) {
      lastTime = this.finished
    }

    return Math.round((lastTime - this.created) / 1000);
  }

  restartGame(board){
    this.status = 'STARTED' ;
    this.created = new Date();
    this.finished = undefined;
    this.board = board ? board : new Board();
  }

  getUncoveredPositions() {
    return this.board.getUncoveredPositions();
  }
}

module.exports = new Game();
