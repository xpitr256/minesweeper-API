'use strict';
class Cell {

  constructor() {
    this.status = 'COVERED' ;}

  isInStatus(askedStatus) {
    return this.status === askedStatus;
  }

}

module.exports = Cell;
