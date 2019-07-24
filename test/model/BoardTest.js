
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

      cells = cells.map((cell) => {
        return cell.print();
      });

      let amountOfBombs = cells.filter(cell => cell === 'B').length;

      assert.equal(amountOfBombs, 10);
    });


  });
});
