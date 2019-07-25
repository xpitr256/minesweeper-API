'use strict';
class Bomb {

  print(){
    return 'B';
  }

  getIndirectRevealedStatus() {
    return 'COVERED';
  }

  addNeighborTo(neighbors, neighbor) {
    return neighbors;
  }

  shouldIRevealANeighbor() {
    return false;
  }

  uncoveredBomb(status) {
    return status === 'UNCOVERED'
  }

  isEmptyCellUncovered(status) {
    // I'm a bomb I don't care about empty cells.
    // For Game winning condition calculus I'll act as an already uncovered empty cell.
    return true;
  }

}

module.exports = Bomb;
