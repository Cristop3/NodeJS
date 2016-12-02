/**这个文件下放的是数据模型模块 */
var mongoose = require('mongoose');

//获取数据集模块
var UsersSchema = require('../schemas/users')

//编译生成Movie模型
var Users = mongoose.model('Users',UsersSchema);

//将其返回出去
module.exports = Users;