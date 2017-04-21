var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var apts = require('../controllers/apts.js');
// var comments = require('../controllers/comments.js');

module.exports = function(app){

	app.get('/getAps', function(req, res){
		apts.getAps(req, res);
	});

	app.post('/login', function(req, res) {
		users.login(req, res);
	});

	app.post('/new/:user', function(req, res) {
		apts.new(req, res);
	});

	app.delete('/remove/:id/:user', function(req, res){
		apts.remove(req, res);
	})

}