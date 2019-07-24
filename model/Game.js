'use strict';

let Board = require('./Board.js');

class Game {

  constructor() {
    this.status = 'STARTED' ;
    this.created = new Date();
    this.board = new Board();
  }

  isInStatus(askedStatus) {
    return this.status === askedStatus;
  }

  isCreated() {
    return this.created !== undefined;
  }
}

module.exports = Game;
