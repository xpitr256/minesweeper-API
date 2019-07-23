'use strict';
class Game {

  constructor() {
    this.status = 'STARTED' ;
  }

  isInStatus(askedStatus) {
    return this.status === askedStatus;
  }
}

module.exports = Game;
