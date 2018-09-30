// requires..
var usersDB = require('./users_db');
var httpBase = require('../base/base_service');


//express
var express = require('express');
var router = express.Router();

// load users objects
router.post('/load', function(req, res){
	console.log("loading...");
	httpBase.setHeader(res);
	var selector = {};
	if(req.body.selector){
		selector = req.body.selector;
		console.log("Selector: " + JSON.stringify(selector));
	}
	usersDB.getUsers(selector, {}, function(result){
		console.log("sending " + result);
		res.send(result); //send the response
	});
});


//save users objects
router.post('/save', function(req, res){
	var users = req.body.users;
	console.log("saving...  array = " + JSON.stringify(users));
	httpBase.setHeader(res);
	usersDB.saveUsers(users, {}, function(result){
		console.log("saved " + result);
		res.send(result); //send the response
	});
});


//export this router to use in our server.js
module.exports = router;
