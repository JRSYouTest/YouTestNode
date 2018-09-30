// requires..
var baseDB = require('../base/base_db');

// Collection: users
var usersCollection ="users";

exports.getUsers = function (selector, options, clbk)
{
	baseDB.findDocuments(usersCollection, selector, options, clbk);
};


exports.saveUsers = function (docs, options, clbk)
{
	baseDB.saveDocuments(usersCollection, docs, options, clbk);
};



