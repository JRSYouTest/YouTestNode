// requires..
var baseDB = require('../base/base_db');

// Collection: categories
var categoriesCollection ="categories";

exports.getCategories = function (selector, options, clbk)
{
	baseDB.findDocuments(categoriesCollection, selector, options, clbk);
};


exports.saveCategories = function (docs, options, clbk)
{
	baseDB.saveDocuments(categoriesCollection, docs, options, clbk);
};



