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

//获取自己所发布的消息
service.findingById = function(uid,cb){
    console.log('传过来的用户ID为：'+uid);
    model.message.find({userID:{"$in":[uid]}},function(err,docs){
        console.log('查询到的消息为：'+docs)
        cb(err,docs)
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

//删除用户自己所发布的消息
service.delete = function(id){
    console.log('要删除的消息id为：'+id);
    model.message.findByIdAndRemove(id,function(err){
        if (err) throw err;
    })
}

//查询出指定的修改消息
service.findMess = function(messId,cb){
    model.message.findById(messId,function(err,docs){
        cb(err,docs);
    })
}

//用户更新自己所发布的消息
service.update = function(messID,_update){
    console.log('需要更新的消息ID为：'+messID)
    model.message.findByIdAndUpdate(messID,_update,function(err){
        if (err) throw err;
    })
}

//导出sercive对象
module.exports = service;