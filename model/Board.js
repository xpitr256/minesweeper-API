'use strict';
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

        let content = 'c';

        if (Math.random() < 0.3 && bombCount > 0){
          bombCount--;
          content = 'b';
        }

        cells[i].push(content);


      }
    }

    return cells;
  }

}

module.exports = Board;
