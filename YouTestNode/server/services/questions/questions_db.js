// requires..
var baseDB = require('../base/base_db');

// Collection: questions
var questionsCollection ="questions";

exports.getQuestions = function (selector, options, clbk)
{
	baseDB.findDocuments(questionsCollection, selector, options, clbk);
};


exports.saveQuestions = function (docs, options, clbk)
{
	baseDB.saveDocuments(questionsCollection, docs, options, clbk);
};



