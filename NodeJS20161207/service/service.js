/**service层 共享出访问数据层model的方法 */
var model = require('../model/model');

//创建个service对象
var service = {};

//添加操作数据模型对象的方法

//查询 获取用户填写的内容查询数据库
service.find = function(userObj,cb){
    console.log(userObj.username)
    model.find({'username':userObj.username,'password':userObj.password},function(err,docs){
        cb(err,docs);
    })
}

//添加 
service.add = function(reqObj,cb){
    //接收用户注册的参数
    var addOne = new model({
        username:reqObj.username,
        password:reqObj.password,
        sex:reqObj.sex
    })
    //操作model对象保存进数据库
    addOne.save(function(err,docs){
        cb(err,docs)
    })
}

//导出sercive对象
module.exports = service;