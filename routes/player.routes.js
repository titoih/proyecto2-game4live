
const express = require('express');
const router = express.Router();
const playerController = require('../controllers/player.controller')
const secure = require('../middelwares/secure.mid');
const uploadCloud = require('../config/db.cloudinary.js');

//router.get('/:id', secure.isAuthenticated, playerController.detail)
router.get('/:id', playerController.detail)

router.get('/', secure.isAuthenticated, playerController.account);
router.post('/', secure.isAuthenticated, uploadCloud.single('photo'), playerController.doEdit)

//router.get('/:id/edit', secure.isAuthenticated, playerController.edit)

module.exports = router;