var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username:String,
    password:String,
    sex:String
});

module.exports = userSchema;