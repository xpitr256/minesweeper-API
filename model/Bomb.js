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
}

module.exports = Bomb;
