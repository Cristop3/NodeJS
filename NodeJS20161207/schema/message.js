/**用户发布消息 数据模型 */
var mongoose = require('mongoose');

var messSchema = new mongoose.Schema({
    userID:String,
    title:String,
    content:String,
    createTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = messSchema;