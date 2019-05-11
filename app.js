require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');

require('./config/db.config');
require('./config/hbs.config');
const session = require('./config/session.config');
require('./config/passport.config');
require('./config/db.cloudinary');


const mainRouter = require('./routes/main.routes');
const authRouter = require('./routes/auth.routes');
const searchRouter = require('./routes/search.routes');
const playerRouter = require('./routes/player.routes');
const uploadRouter = require('./routes/picture.routes')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.path = req.path;
  res.locals.session = req.user;
  next();
})

app.use('/', mainRouter);
app.use('/', authRouter);
app.use('/', searchRouter);
app.use('/player', playerRouter);
app.use('/upload', uploadRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
