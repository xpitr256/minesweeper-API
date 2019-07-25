
let assert = require('assert');
let Board = require('../../model/Board.js');
let Bomb = require('../../model/Bomb.js');
let Cell = require('../../model/Cell.js');
let boardTestUtils = require('./BoardTestUtils.js');
let utils = require('../testUtils.js');


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

    it('should assign neighbors for all empty Cells', function() {

      let cells = [];

      board.cells.forEach((cellRow) => {
        cells.push(...cellRow);
      });

      let cellsWithOutNeighbors = 0;

      cells.forEach((cell) => {
        if(!cell.hasNeighbors()){
          cellsWithOutNeighbors++;
        }
      });

      assert.equal(cellsWithOutNeighbors, 10);
    });

  });

  describe('Revealing cell (0,0)', function() {

    it('should assign status UNCOVERED for all empty neighbors in a recurse way until a neighbor is a bomb.', function() {

      /**
       *  N = null
       *  B = Bomb
       *  u = uncovered
       *
       *  BOARD
       *
       *  N N N N N N N N
       *  N N N B N N N N
       *  N N N N N N N N
       *  N B N N N N N N
       *  N N N N N N N N
       *  N N N N N N N N
       *  N N N N N N N N
       *  N N N N N N N N
       *
       *  reveal (0,0) => Expected status
       *
       *  u u u N N N N N
       *  u u u B N N N N
       *  u u u N N N N N
       *  N B N N N N N N
       *  N N N N N N N N
       *  N N N N N N N N
       *  N N N N N N N N
       *  N N N N N N N N
       *
       */

      let board = boardTestUtils.getTestBoard();
      board.reveal(0,0);

      let cells = [];

      board.cells.forEach((cellRow) => {
        cells.push(...cellRow);
      });

      let uncoveredCells = 0;

      cells.forEach((cell) => {
        if(cell.isInStatus('UNCOVERED')) {
          uncoveredCells++;
        }
      });

      assert.equal(uncoveredCells, 9);
    });


    it('should calculated UNCOVERED positions.', function() {

      let board = boardTestUtils.getTestBoard();

      board.reveal(0,0);

      let expectedUncoveredPositions = [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 2, y: 2 }
      ];

      let positions = board.getUncoveredPositions();

      let comparisons = [];

      positions.forEach((position, index) => {
        comparisons.push(utils.isEquivalent(position,expectedUncoveredPositions[index]))
      });

      let allPositionAreEquals = comparisons.every((comparison) => comparison);

      assert(allPositionAreEquals);
    });


  });
});
