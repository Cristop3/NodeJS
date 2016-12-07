/**用户发布信息的service层 */
var model = require('../model/message');

var service = {};

//获取所有用户发布的消息
service.find = function(cb){
    model.find(function(err, docs){
        cb(err,docs);
    })
}


//用户发布信息保存
service.publish = function(messObj){
    var messOne = new model({
        title:messObj.title,
        content:messObj.content,
        userID:messObj.userID
    })
    messOne.save();
}

module.exports = service;