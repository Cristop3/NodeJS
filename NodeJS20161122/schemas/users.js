/**在项目根目录创建schemas目录用于存放模式文件,以用户表为例 */
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username:{unique:true,type:String},
    password:String
})
module.exports = userSchema;