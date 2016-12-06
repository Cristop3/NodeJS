//引入mongoose ORM 模块
var mongoose = require('mongoose');

//创建document的结构
var userSchema = new mongoose.Schema({
    uid:String,
    title: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now
    }
})

//module.export = userSchema;
//exports.userDemo = userSchema
module.exports = userSchema;
