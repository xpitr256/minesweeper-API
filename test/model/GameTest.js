
let assert = require('assert');
let Game = require('../../model/Game.js');

describe('Game Test ', function() {

  describe('Starting a new Game ', function() {

    let game = new Game();

    it('should have status STARTED', function() {
      assert.equal(game.isInStatus('STARTED'), true);
    });

    it('should have creation date', function() {
      assert.equal(game.isCreated(), true);
    });

  });
});
