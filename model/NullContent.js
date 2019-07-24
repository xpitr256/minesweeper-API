'use strict';
class NullContent {

  print(){
    return 'N';
  }

  getIndirectRevealedStatus() {
    return 'UNCOVERED';
  }

  addNeighborTo(neighbors, neighbor) {
    neighbors.push(neighbor);
    return neighbors;
  }
}

module.exports = NullContent;
