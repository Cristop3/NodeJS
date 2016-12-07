/**service层 共享出访问数据层model的方法 */
var model = require('../model/model');

//创建个service对象
var service = {};

//添加操作数据模型对象的方法

//查询 获取用户填写的内容查询数据库
service.find = function(userObj,cb){
    //console.log(userObj.username)
    model.model.find({'username':userObj.username,'password':userObj.password},function(err,docs){
        cb(err,docs);
    })
}

//添加 
service.add = function(reqObj){
    //接收用户注册的参数
    var addOne = new model.model({
        username:reqObj.username,
        password:reqObj.password,
        sex:reqObj.sex
    })
    //操作model对象保存进数据库
    // addOne.save(function(err,docs){
    //     cb(err,docs)
    // })
    addOne.save();
}

//获取所有用户发布的消息
service.finding = function(cb){
    model.message.find(function(err, docs){
        cb(err,docs);
    })
}


//用户发布信息保存
service.publish = function(messObj){
    console.log(messObj);
    var messOne = new model.message({
        title:messObj.title,
        content:messObj.content,
        userID:messObj.userID
    })
    messOne.save();
}

//导出sercive对象
module.exports = service;