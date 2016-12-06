//引入mongoose ORM 模块
var mongoose = require('mongoose');

//创建document的结构
var userSchema = new mongoose.Schema({
    uId:String,
    username:String,
    password:String
})

module.export = userSchema