const mongoose = require('mongoose')
const Player = require('../models/player.model');

module.exports.list = (req, res, next) => {

Player.find({})
.then( players => {
  res.render('search/searchResults', {players})
})
.catch(error => next(error))
}

module.exports.searchForm = (req, res, next) => {
    
    const search = req.query;

    if(search.nick || search.nickInGame || search.country || search.game || search.levelInGame || search.goal || search.language || search.schedule ) {
      Player.find({$or:[{nick:search.nick}, {nickInGame: search.nickInGame},
      {country:search.country},{game:search.game},{levelInGame: search.levelInGame},{goal: search.goal},{language: search.language},{schedule: search.schedule},]})
  
      .then( players => {
        res.render('search/search', {players, search})
      })
      .catch(error => next(error)) 
     
    } else if(search.freeField) {
          Player.find({$or:[{nick:search.freeField}, {nickInGame: search.freeField},
            {country:search.freeField},{game:search.freeField},{levelInGame: search.freeField},{goal: search.freeField},{language: search.freeField},{schedule: search.freeField},]})
              
            .then( players => {
              res.render('search/search', {players})
            })
            .catch(error => next(error))

      } else {
      Player.find({})
      .then( players => {
        res.render('search/search', {players})
      })
      .catch(error => next(error))
  }
}
