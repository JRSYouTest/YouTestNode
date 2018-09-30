// requires
var serverPort = 9999;

var bodyParser = require('body-parser');

var express = require('express');
var app = express();

//express logic
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// Link: static HTML/angular pages 
app.use(express.static("../client"));


//Link : upload service
var uploadService = require('./services/common/upload_service.js');
app.use('/upload', uploadService);

//Link : users service
var usersService = require('./services/users/users_service.js');
app.use('/users', usersService);

//Link : question service
var questionsService = require('./services/questions/questions_service.js');
app.use('/questions', questionsService);


// web server 
app.listen(serverPort, function(){
	console.log("Listenting on port: " + serverPort )
}); 

