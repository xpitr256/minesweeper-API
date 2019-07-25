'use strict';

let Cell = require('./Cell.js');
let Bomb = require('./Bomb.js');

class Board {

  constructor(cells) {
    this.size = 8;
    this.bombAmount = 10;
    this.cells = cells ? cells : this.initCells();
  }

  initCells() {

    let cells = [];
    let bombCount = this.bombAmount;

    for (let i = 0 ; i < this.size; i++) {

      cells.push([]);

      for (let j = 0 ; j < this.size; j++) {

        let content;

        if (Math.random() < 0.3 && bombCount > 0) {
          bombCount--;
          content = new Bomb();
        }

        cells[i].push(new Cell(content));
      }
    }

    return this.assignNeighborsTo(cells);
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

  isValidPosition(x,y) {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }

  getUncoveredPositions() {

    let uncoveredPositions = [];

    for (let i = 0 ; i < this.size; i++) {

      for (let j = 0 ; j < this.size; j++) {

        this.cells[i][j].addUncoveredPosition(uncoveredPositions,i,j);
      }
    }

    return uncoveredPositions;
  }

  reveal(x, y) {

    if (this.isValidPosition(x,y)) {
      this.cells[x][y].reveal();
      return true;
    }

    return false;
  }

  allEmptyCellsAreUncovered() {
    let cells = [];

    this.cells.forEach((cellRow) => {
      cells.push(...cellRow);
    });

    return cells.every((cell)=> {
      return cell.isEmptyCellUncovered();
    });
  }

  doIHaveAnUncoveredBomb() {
    let cells = [];

    this.cells.forEach((cellRow) => {
      cells.push(...cellRow);
    });

    return cells.some((cell)=> {
      return cell.doIHaveAnUncoveredBomb();
    });
  }

  assignNeighborsTo(cells) {

    for (let i = 0 ; i < this.size; i++) {

      for (let j = 0 ; j < this.size; j++) {

        let neighborsPositions = this.getNeighborsPositionsFor(i,j);

        neighborsPositions.forEach((position) => {
          cells[i][j].addNeighbor(cells[position.x][position.y]);
        });
      }
    }

    return cells;
  }

  getNeighborsPositionsFor(x,y) {

    // Corner case (0,0)
    if (x === 0 && y === 0) {
      return [
        {x:0, y:1},
        {x:1, y:0},
        {x:1, y:1}
      ]
    }

    // Corner case (0,7)
    if (x === 0 && y === this.size-1) {
      return [
        {x:0, y: this.size-2},
        {x:1, y: this.size-2},
        {x:1, y: this.size-1}
      ]
    }

    // Corner case (7,0)
    if (x === this.size-1 && y === 0) {
      return [
        {x: this.size-2, y:0},
        {x: this.size-2, y:1},
        {x: this.size-1, y:1}
      ]
    }

    // Corner case (7,7)
    if (x === this.size-1 && y === this.size-1) {
      return [
        {x: this.size-2, y: this.size-2},
        {x: this.size-2, y: this.size-1},
        {x: this.size-1, y: this.size-2}
      ]
    }

    // Border cases

    //  Top Border case
    if (x === 0 && y < this.size-1){
      return [
        {x: 0, y: y-1},
        {x: 0, y: y+1},
        {x: 1, y: y-1},
        {x: 1, y: y},
        {x: 1, y: y+1}
      ]
    }

    //  Left Border case
    if (x < this.size-1 && y === 0){
      return [
        {x: x-1, y: 0},
        {x: x-1, y: 1},
        {x: x, y: 1},
        {x: x+1, y: 1},
        {x: x+1, y: 0}
      ]
    }


    //  Bottom Border case
    if (x === this.size-1 && y < this.size-1){
      return [
        {x: x, y: y-1},
        {x: x-1, y: y-1},
        {x: x-1, y: y},
        {x: x-1, y: y+1},
        {x: x, y: y+1}
      ]
    }

    //  Right Border case
    if (x < this.size-1 && y === this.size-1){
      return [
        {x: x-1, y: y},
        {x: x-1, y: y-1},
        {x: x, y: y-1},
        {x: x+1, y: y-1},
        {x: x+1, y: y}
      ]
    }

    // Default centered case
    return [
      {x: x-1, y: y-1},
      {x: x-1, y: y},
      {x: x-1, y: y+1},
      {x: x, y: y-1},
      {x: x, y: y+1},
      {x: x+1, y: y-1},
      {x: x+1, y: y},
      {x: x+1, y: y+1},
    ];
  }

}

module.exports = Board;
