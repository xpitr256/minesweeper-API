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

  shouldIRevealANeighbor() {
    return this.content.shouldIRevealANeighbor();
  }

  doIHaveAnUncoveredBomb() {
    return this.content.uncoveredBomb(this.status);
  }

  revealNeighbors() {
    //Do not tell neighbors to reveal if 1 of them is a Bomb !!
    let revealMyNeighbors = this.neighbors.every((neighbor)=> {
      return neighbor.shouldIRevealANeighbor();
    });

    if (revealMyNeighbors) {
      this.neighbors.forEach((neighbor) => {
        neighbor.indirectReveal();
      });
    }
  }

  reveal() {
    if (this.status === 'COVERED') {
      this.status = 'UNCOVERED';
      this.revealNeighbors();
    }
  }

  indirectReveal() {
    if (this.status === 'COVERED') {
      this.status = this.content.getIndirectRevealedStatus();
      this.revealNeighbors();
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
