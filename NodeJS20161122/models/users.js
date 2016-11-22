/**在项目根目录创建models目录用于存放模型文件,以用户表为例 */
var mongoose = require('mongoose');
var userSchema = require('/schemas/user')
var User = mongoose.model('User',userSchema);
module.exports = User;