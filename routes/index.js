var express = require('express');
var router = express.Router();

var ViewController = require('../controllers/ViewController.js');
var AuthController = require('../controllers/AuthController.js');

/* GET home page. */

// Flickr test to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(req, res) {
  res.render("index", {title: "hello"});
});
router.use(function(req, res, next){
  next();
  // make sure we go to the next route and don't stop here
});

// CRUD routes

module.exports = router;
