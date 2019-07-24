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

  shouldIRevealANeighbor() {
    return true;
  }

  uncoveredBomb(status) {
    return false;
  }
}

module.exports = NullContent;
