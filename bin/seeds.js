const Player = require('../models/player.model');
// const Celebrities = require('../data/celebrities.json');
const mongoose = require('mongoose');
require('../config/db.config');

const Players =
[

 {
   "email": "213@hotmail.com",
   "password": "213123",
   "nick": "julio iglesias",
   "nickInGame": "vividor",
   "country": "Spain",
   "game": "CSGO"
 },

 {
   "email": "212q3@hotmail.com",
   "password": "2131231",
   "nick": "fary",
   "nickInGame": "frania",
   "country": "Germany",
   "game": "Fortnite"
 },

 {
   "email": "212e23@hotmail.com",
   "password": "21313231",
   "nick": "reshulon",
   "nickInGame": "reshulon69",
   "country": "Germany",
   "game": "Fortnite"
 },

 {
   "email": "232r43@hotmail.com",
   "password": "23231",
   "nick": "Gata",
   "nickInGame": "Gatita19",
   "country": "France",
   "game": "Clash Royale"
 },
 {
   "email": "234ew2543@hotmail.com",
   "password": "23231",
   "nick": "Dioni",
   "nickInGame": "inYourFce",
   "country": "Spain",
   "game": "Clash Royale"
 },
 {
   "email": "234q343@hotmail.com",
   "password": "232321",
   "nick": "xPeke",
   "nickInGame": "Fcking master",
   "country": "Spain",
   "game": "CSGO"
 },
 {
   "email": "212e2e3@hotmail.com",
   "password": "wqer2",
   "nick": "Black Widow",
   "nickInGame": "Black Widow",
   "country": "Germany",
   "game": "CSGO"
 },
 {
   "email": "21bb3@hotmail.com",
   "password": "wqerd2",
   "nick": "Michael",
   "nickInGame": "Knight",
   "country": "Spain",
   "game": "CSGO"
 },
 {
   "email": "21bbu3@hotmail.com",
   "password": "wggd2",
   "nick": "Marta",
   "nickInGame": "Martii",
   "country": "Spain",
   "game": "CSGO"
 },
 {
   "email": "21wbu3@hotmail.com",
   "password": "wggde2",
   "nick": "Valariz3",
   "nickInGame": "valariz",
   "country": "Germany",
   "game": "Fortnite"
 },
 {
   "email": "21wbur3@hotmail.com",
   "password": "wggdwe2",
   "nick": "estrambotico",
   "nickInGame": "Estrambotic",
   "country": "Germany",
   "game": "Clash Royale"
 },


 ]

Player.create(Players)
 .then((Players) => console.info(`${Players.length} new PLAYER added to the database`))
 .catch(error => console.error(error))
 .then(() => mongoose.connection.close());