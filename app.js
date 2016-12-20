require('dotenv').config();
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var _ = require('underscore');
var ejs = require('ejs');
var logger = require('morgan');
var mongoose = require('mongoose');
var authOptions = require('./config/auth_options');
var request = require('request'); // "Request" library
var cookieParser = require('cookie-parser');
var bodyParser= require('body-parser');

var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};


mongoose.connect('mongodb://localhost/public');

var routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


console.log('Magic happens on port 3000');



module.exports = app;
