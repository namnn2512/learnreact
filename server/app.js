'use strict';
require('babel-register')({
  presets: ['es2015']
});

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config/config').default;

var index = require('./routes/index');
var users = require('./routes/users');
var films = require('./routes/films');

var app = express();

app.set('appPath', path.join(config.root, 'client'));
// view engine setup
app.set('views', path.join(app.get('appPath'), 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(app.get('appPath'), 'public')));

app.use('/', index);
app.use('/api/users', users);
app.use('/api/films', films);

app.get('/*', function (req, res) {
  res.sendFile(path.join(app.get('appPath'), 'views', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendFile(path.join(app.get('appPath'), 'views', 'index.html'));
});

module.exports = app;
