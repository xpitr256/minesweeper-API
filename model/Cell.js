'use strict';
class Cell {

  constructor() {
    this.status = 'COVERED';
    this.neighbors = [];
  }

  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }

  reveal() {
    this.status = 'UNCOVERED';
  }

  /**
   * For TEST only
   */

  isInStatus(askedStatus) {
    return this.status === askedStatus;
  }

  hasNeighbors() {
    return this.neighbors.length > 0;
  }
}

module.exports = Cell;
