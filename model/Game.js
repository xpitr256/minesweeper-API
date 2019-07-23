'use strict';
class Game {

  constructor() {
    this.status = 'STARTED' ;
    this.created = new Date();
  }

  isInStatus(askedStatus) {
    return this.status === askedStatus;
  }

  isCreated(){
    return this.created !== undefined;
  }



}

module.exports = Game;
