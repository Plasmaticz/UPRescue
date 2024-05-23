var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Require the login route
var loginRouter = require('./routes/login');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filterRouter = require('./routes/filter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use the login router
app.use('/login', loginRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/filter', filterRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, providing error in development and adding a title
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = 'Error'; 

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
