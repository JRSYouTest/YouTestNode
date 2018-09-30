// requires..
var productsDB = require('./products_db');
var httpBase = require('../base/base_service');


//express
var express = require('express');
var router = express.Router();

// load products objects
router.post('/load', function(req, res){
	console.log("loading...");
	httpBase.setHeader(res);
	var selector = {};
	if(req.body.selector){
		selector = req.body.selector;
		console.log("Selector: " + JSON.stringify(selector));
	}
	productsDB.getUsers(selector, {}, function(result){
		console.log("sending " + result);
		res.send(result); //send the response
	});
});


//save products objects
router.post('/save', function(req, res){
	var products = req.body.products;
	console.log("saving...  array = " + JSON.stringify(products));
	httpBase.setHeader(res);
	productsDB.saveUsers(products, {}, function(result){
		console.log("saved " + result);
		res.send(result); //send the response
	});
});


//export this router to use in our server.js
module.exports = router;
