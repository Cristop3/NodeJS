/**用户发布信息 数据模型对象 */
var mongoose = require('mongoose');

//解决mongoose_lib过期问题
mongoose.Promise = global.Promise;

var messShema = require('../schema/message');

var db = mongoose.connect('mongodb://localhost/first');

module.exports = db.model('message',messShema);