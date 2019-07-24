'use strict';

let NullContent = require('./NullContent.js');

class Cell {

  constructor(content) {
    this.status = 'COVERED';
    this.neighbors = [];
    this.content = content ? content : new NullContent();
  }

  addNeighbor(neighbor) {
    this.neighbors = this.content.addNeighborTo(this.neighbors, neighbor);
  }

  reveal() {

    if (this.status === 'COVERED') {
      this.status = 'UNCOVERED';
      this.neighbors.forEach((neighbor) => {
        neighbor.indirectReveal();
      });
    }
  }

  indirectReveal() {
    if (this.status === 'COVERED') {
      this.status = this.content.getIndirectRevealedStatus();
      this.neighbors.forEach((neighbor) => {
        neighbor.indirectReveal();
      });
    }
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
