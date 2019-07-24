'use strict';

let Cell = require('./Cell.js');
let Bomb = require('./Bomb.js');

class Board {

  constructor() {
    this.size = 8;
    this.bombAmount = 10;
    this.cells = this.initCells();
  }

  initCells() {

    let cells = [];
    let bombCount = this.bombAmount;

    for (let i = 0 ; i < this.size; i++) {

      cells.push([]);

      for (let j = 0 ; j < this.size; j++) {

        let content;

        if (Math.random() < 0.3 && bombCount > 0){
          bombCount--;
          content = new Bomb();
        }

        cells[i].push(new Cell(content));
      }
    }

    return cells;
  }

  print() {

    let cells = [];

    for (let i = 0 ; i < this.size; i++) {

      cells.push([]);

      for (let j = 0 ; j < this.size; j++) {

        cells[i].push(this.cells[i][j].print());
      }
    }

    return cells;
  }

  reveal(x, y) {
    this.cells[x][y].reveal();
  }

}

module.exports = Board;
