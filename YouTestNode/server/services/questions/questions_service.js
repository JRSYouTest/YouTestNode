// requires..
var questionsDB = require('./questions_db');
var httpBase = require('../base/base_service');


//express
var express = require('express');
var router = express.Router();

// load questions objects
router.post('/load', function(req, res){
	console.log("loading...");
	httpBase.setHeader(res);
	var selector = {};
	if(req.body.selector){
		selector = req.body.selector;
		console.log("Selector: " + JSON.stringify(selector));
	}
	questionsDB.getQuestions(selector, {}, function(result){
		console.log("sending " + result);
		res.send(result); //send the response
	});
});


//save questions objects
router.post('/save', function(req, res){
	var questions = req.body.questions;
	console.log("saving...  array = " + JSON.stringify(questions));
	httpBase.setHeader(res);
	questionsDB.saveQuestions(questions, {}, function(result){
		console.log("saved " + result);
		res.send(result); //send the response
	});
});


//export this router to use in our server.js
module.exports = router;
