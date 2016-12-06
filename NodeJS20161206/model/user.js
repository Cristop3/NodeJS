// var mongoose = require('mongoose');
// // var Schema = mongoose.Schema;

// // var demoSchema = new Schema({
// //     uid: String,
// //     title: String,
// //     content: String,
// //     createTime: {
// //         type: Date,
// //         default: Date.now
// //     }
// // });

//  var userSchema = require('../schema/user');

// exports.Demo = mongoose.model('demo', userSchema, 'demo');

var mongoose = require('mongoose');

var userSchema = require('../schema/user');

var db = mongoose.connect('mongodb://localhost/dbTest');

var testModel = db.model('demo',userSchema);

//exports.demo= testModel;
module.exports = testModel;
