'use strict';
class Cell {

  constructor() {
    this.status = 'COVERED';
  }

  isInStatus(askedStatus) {
    return this.status === askedStatus;
  }

  reveal() {
    this.status = 'UNCOVERED';
  }

}

module.exports = Cell;
