const mongoose = require('mongoose');
const Player = require('../models/picture.model');
const multer = require('multer');

module.exports.upLoad = (req, res, next) => {
  console.log(req.file)
  const pictures = req.file;

  Object.assign(pictures, req.file);
  pictures.save()
    .then(player => res.redirect('/player'))
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors);
      } else {
        next(error);
      }
    });
  
  
}