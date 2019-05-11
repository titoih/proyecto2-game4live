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
   "game": "CSGO",
   "levelInGame": "213123",
   "goal": "Hardcore",
   "language": "ES",
   "schedule": "Morning",
 },

 {
   "email": "212q3@hotmail.com",
   "password": "2131231",
   "nick": "fary",
   "nickInGame": "frania",
   "country": "Germany",
   "game": "Fortnite",
   "levelInGame": "213123",
   "goal": "Hardcore",
   "language": "ES",
   "schedule": "Morning",
 },

 {
   "email": "212e23@hotmail.com",
   "password": "21313231",
   "nick": "reshulon",
   "nickInGame": "reshulon69",
   "country": "Germany",
   "game": "Fortnite",
   "levelInGame": "213123",
   "goal": "Casual",
   "language": "ENG",
   "schedule": "Night",
 },

 {
   "email": "232r43@hotmail.com",
   "password": "23231",
   "nick": "Gata",
   "nickInGame": "Gatita19",
   "country": "France",
   "game": "Clash Royale",
   "levelInGame": "213123",
   "goal": "Hardcore",
   "language": "RU",
   "schedule": "Afternoon",
 },
 {
   "email": "234ew2543@hotmail.com",
   "password": "23231",
   "nick": "Dioni",
   "nickInGame": "inYourFce",
   "country": "Spain",
   "game": "Clash Royale",
   "levelInGame": "213123",
   "goal": "Hardcore",
   "language": "RU",
   "schedule": "Afternoon",
 },
 {
   "email": "234q343@hotmail.com",
   "password": "232321",
   "nick": "xPeke",
   "nickInGame": "Fcking master",
   "country": "Spain",
   "game": "CSGO",
   "levelInGame": "213123",
   "goal": "Hardcore",
   "language": "ES",
   "schedule": "Night",
 },
 {
   "email": "212e2e3@hotmail.com",
   "password": "wqer2",
   "nick": "Black Widow",
   "nickInGame": "Black Widow",
   "country": "Germany",
   "game": "CSGO",
   "levelInGame": "45",
   "goal": "Hardcore",
   "language": "ENG",
   "schedule": "Night",
 },
 {
   "email": "21bb3@hotmail.com",
   "password": "wqerd2",
   "nick": "Michael",
   "nickInGame": "Knight",
   "country": "Spain",
   "game": "CSGO",
   "levelInGame": "33",
   "goal": "Hardcore",
   "language": "ENG",
   "schedule": "Afternoon",
 },
 {
   "email": "21bbu3@hotmail.com",
   "password": "wggd2",
   "nick": "Marta",
   "nickInGame": "Martii",
   "country": "Spain",
   "game": "CSGO",
   "levelInGame": "23",
   "goal": "Casual",
   "language": "ES",
   "schedule": "Night",
 },
 {
   "email": "21wbu3@hotmail.com",
   "password": "wggde2",
   "nick": "Valariz3",
   "nickInGame": "valariz",
   "country": "Germany",
   "game": "Fortnite",
   "levelInGame": "53",
   "goal": "Casual",
   "language": "ENG",
   "schedule": "Afternoon",
 },
 {
   "email": "21wbur3@hotmail.com",
   "password": "wggdwe2",
   "nick": "estrambotico",
   "nickInGame": "Estrambotic",
   "country": "Germany",
   "game": "Clash Royale",
   "levelInGame": "13",
   "goal": "Casual",
   "language": "ENG",
   "schedule": "Afternoon",
 },


 ]

Player.create(Players)
 .then((Players) => console.info(`${Players.length} new PLAYER added to the database`))
 .catch(error => console.error(error))
 .then(() => mongoose.connection.close());