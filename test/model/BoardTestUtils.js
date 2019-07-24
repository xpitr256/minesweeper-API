
let Board = require('../../model/Board.js');
let Bomb = require('../../model/Bomb.js');
let Cell = require('../../model/Cell.js');

module.exports = {

  getTestBoard: function() {

    let testCells = [];
    let boardSize = 8;

    /**
     *  N = null
     *  B = Bomb
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
     */

    //Create custom test board.
    for (let i = 0 ; i < boardSize; i++) {

      testCells.push([]);

      for (let j = 0 ; j < boardSize; j++) {

        let content;

        if ((i === 1 && j === 3) || (i === 3 && j === 1)) {
          content = new Bomb();
        }

        testCells[i].push(new Cell(content));
      }
    }

    let testBoard = new Board();
    testCells = testBoard.assignNeighborsTo(testCells);

    return new Board(testCells);
  }
};
