
let assert = require('assert');
let Game = require('../../model/Game.js');

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
});
