
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

      let amountOfBombs = cells.filter(cell => cell === 'B COVERED').length;

      assert.equal(amountOfBombs, 10);
    });

    describe('and revealing position (0,0)', function(){

      it('should change that cell status', function(){

        board.reveal(0,0);
        assert(board.cells[0][0].isInStatus('UNCOVERED'));

      });

    });

    describe('and revealing invalid position (-2,14)', function() {

      it('should return false', function(){
        assert(!board.reveal(-2,14));
      });

      //TODO add more boundary cases.
    });

    it('should assign neighbors for all Cells', function() {

      let cells = [];

      board.cells.forEach((cellRow) => {
        cells.push(...cellRow);
      });

      let allCellsHaveNeighbors = cells.every((cell) => {
        return cell.hasNeighbors();
      });

      assert(allCellsHaveNeighbors);
    });

  });

  describe('Revealing all cells ', function() {

    it('should assign status UNCOVERED for all Cells', function() {

      let board = new Board();
      board.reveal(0,0);

      let cells = [];

      board.cells.forEach((cellRow) => {
        cells.push(...cellRow);
      });

      let allCellsAreUncovered = cells.every((cell) => {
        return cell.isInStatus('UNCOVERED');
      });

      assert(allCellsAreUncovered);

    });
  });
});
