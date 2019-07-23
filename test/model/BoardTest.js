
let assert = require('assert');
let Board = require('../../model/Board.js');

describe('Board Test ', function() {

  describe('Creating a new Board ', function() {

    let board = new Board();

    it('should have 10 bombs', function() {

      let cells = [];

      board.cells.forEach((cellRow) => {
        cells.push(...cellRow);
      });

      let amountOfBombs = cells.filter(cell => cell === 'b').length;

      assert.equal(amountOfBombs, 10);
    });


  });
});
