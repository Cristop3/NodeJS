/**model层 操作数据库 类似dao层 */
var mongoose = require('mongoose');

//解决mongoose_lib过期问题
mongoose.Promise = global.Promise;

//引入数据模型
var userSchema = require('../schema/user');

//链接数据库
var db = mongoose.connect('mongodb://localhost/first');

//返回数据对象模型{第一个参数为：document名称通俗点就是表名称，第二个参数是你的数据模型}
module.exports = db.model('user',userSchema);