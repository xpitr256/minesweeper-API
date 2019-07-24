'use strict';

let NullContent = require('./NullContent.js');

class Cell {

  constructor(content) {
    this.status = 'COVERED';
    this.neighbors = [];
    this.content = content ? content : new NullContent();
  }

  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }

  reveal() {
    this.status = 'UNCOVERED';
  }

  print() {
    return this.content.print() + ' ' + this.status;
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
