
let assert = require('assert');
let game = require('../../model/Game.js');

let boardTestUtlis = require('./BoardTestUtils.js');

describe('Game Test ', function() {

  describe('Starting a new Game ', function() {

    it('should have status STARTED', function() {
      assert(game.isInStatus('STARTED'));
    });

    it('should have creation date', function() {
      assert(game.isCreated());
    });

  });

  describe('Playing a new Game ', function() {

    it('should have status LOST after revealing a Bomb', function() {

      let testBoard = boardTestUtlis.getTestBoard();
      game.restartGame(testBoard);
      game.reveal(1,3);

      assert(game.isInStatus('LOST'));
    });

    it('should have status WON after revealing all empty Cells', function() {

      let testBoard = boardTestUtlis.getTestBoard();
      game.restartGame(testBoard);
      game.reveal(0,0);
      game.reveal(7,7);
      game.reveal(0,3);
      game.reveal(3,0);
      assert(game.isInStatus('WON'));
    });
  });
});
