const mongoose = require('mongoose');
const Player = require('../models/player.model');


module.exports.detail = (req, res, next) => {
    const criteria = req.params.id
    Player.findById(criteria)
      .then( player => {
        res.render('player/player', {player})
      })
      .catch(error => next(error))
  }

module.exports.account = (req, res, next) => {
    
    Player.findOne({email:req.user.email})
      .then(player => {
        res.render('player/account', { player })
      })
      .catch(error => next(error));
  }

  module.exports.edit = (req, res, next) => {
    const id = req.params.id
    Player.findById(id)
      .then( player => {
        res.render('player/edit', {player})
      })
      .catch(error => next(error))
  }
  
  module.exports.doEdit = (req, res, next) => {
    const player = req.user;
    const { nick, nickInGame, country, game } = req.body;

    function renderWithErrors(errors) {
      res.render('player/account', {
        player,
        account: req.body,
        errors: errors
      })
    }

    if(req.file) {
      const imgPath = req.file.url;
      const imgName = req.file.originalname;
      Object.assign(player, {nick, nickInGame, country, game, imgPath, imgName});
      player.save()
        .then(player => res.redirect('/player'))
        .catch(error => {
          if (error instanceof mongoose.Error.ValidationError) {
            renderWithErrors(error.errors);
          } else {
            next(error);
          }
        });
      
        } else {
      Object.assign(player, {nick, nickInGame, country, game});
      player.save()
          .then(player => res.redirect('/player'))
          .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
              renderWithErrors(error.errors);
            } else {
              next(error);
            }
          });
    }


    
    
  }