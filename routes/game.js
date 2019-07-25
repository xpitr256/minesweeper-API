

let game = require('../model/Game.js');
let boardTestUtlis = require('../test/model/BoardTestUtils.js');

function createGame(req, res) {

  game.restartGame();

  res.json({
    status: game.status,
    created: game.created
  });
}

function createTestGame(req, res) {

  let testBoard = boardTestUtlis.getTestBoard();
  game.restartGame(testBoard);

  res.json({
    status: game.status,
    created: game.created
  });
}

function gameStatus() {
  return {
    status: game.status,
    created: game.created,
    elapsedTimeInSeconds: game.elapsedTimeInSeconds(),
    uncoveredPositions: game.getUncoveredPositions()
  }
}

function getGame(req, res) {

  res.json(gameStatus());
}

function revealPosition(req, res) {

  if (req.body.x && req.body.y) {
    game.reveal(req.body.x, req.body.y);
  }

  res.json(gameStatus());
}


module.exports = {
  createGame: createGame,
  createTestGame: createTestGame,
  getGame: getGame,
  revealPosition: revealPosition
};
