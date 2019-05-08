const Player = require('../models/player.model');

module.exports = (req, res, next) => {
  Player.find({})
  .then(players => {
    res.render('home', {players});
  })
  .catch(error => next(error))

}