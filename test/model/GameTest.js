
let assert = require('assert');
let Game = require('../../model/Game.js');

let boardTestUtlis = require('./BoardTestUtils.js');

describe('Game Test ', function() {

  describe('Starting a new Game ', function() {

    let game = new Game();

    it('should have status STARTED', function() {
      assert(game.isInStatus('STARTED'));
    });

    it('should have creation date', function() {
      assert(game.isCreated());
    });

  });

  describe('Playing a new Game ', function() {

    let testBoard = boardTestUtlis.getTestBoard();
    let game = new Game(testBoard);

    it('should have status LOST after revealing a Bomb', function() {

      game.reveal(1,3);

      assert(game.isInStatus('LOST'));
    });
  });
});
