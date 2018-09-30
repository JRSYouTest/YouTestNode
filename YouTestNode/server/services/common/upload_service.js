var express = require('express');
var router = express.Router();

var formidable = require('formidable');
var fs = require('fs');
var httpBase = require('../base/base_service');


router.post('/*', function(req, res){
	console.log("Uploading...");
	httpBase.setHeader(res);

	var newPathPrefix = "../client/";
	var folder = "uploads/";
	if(req.path.endsWith("/img")){
		folder = "img/";
	} else {
	}
	newPathPrefix = newPathPrefix + folder;

	var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = newPathPrefix + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) {
            res.send({'success': false});
        } else {
        	console.log("uploaded - " + newpath);
            res.send({'success': true, 'file':files.filetoupload.name});
        }
        //res.end();
      });
 });
});

//export this router to use in our server.js
module.exports = router;
