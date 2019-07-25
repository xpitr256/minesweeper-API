

let game = require('../model/Game.js');

function createGame(req, res) {

  game.restartGame();

  res.json({
    status: game.status,
    created: game.created
  });
}

function getGame(req, res) {

  res.json({
    status: game.status,
    created: game.created
  });
}


module.exports = {
  createGame: createGame,
  getGame: getGame
};
