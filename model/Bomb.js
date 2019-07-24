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
}

module.exports = Bomb;
