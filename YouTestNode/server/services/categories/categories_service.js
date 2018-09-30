// requires..
var categoriesDB = require('./categories_db');
var httpBase = require('../base/base_service');


//express
var express = require('express');
var router = express.Router();

// load categories objects
router.post('/load', function(req, res){
	console.log("loading...");
	httpBase.setHeader(res);
	var selector = {};
	if(req.body.selector){
		selector = req.body.selector;
		console.log("Selector: " + JSON.stringify(selector));
	}
	categoriesDB.getCategories(selector, {}, function(result){
		console.log("sending " + result);
		res.send(result); //send the response
	});
});


//save categories objects
router.post('/save', function(req, res){
	var categories = req.body.categories;
	console.log("saving...  array = " + JSON.stringify(categories));
	httpBase.setHeader(res);
	categoriesDB.saveCategories(categories, {}, function(result){
		console.log("saved " + result);
		res.send(result); //send the response
	});
});


//export this router to use in our server.js
module.exports = router;
