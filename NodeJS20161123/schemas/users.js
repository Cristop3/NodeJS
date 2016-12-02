/**这个文件夹schemas是数据集模块 */
var mongoose = require('mongoose');

//声明一个mongoons对象
var UsersSchema = new mongoose.Schema({
    name:String,
    paw:String,
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
})

//每次执行都会调用，时间更新操作
UsersSchemal.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt = Date.now();
    }else{
        this.meta.updateAt = Date.now()
    }
    next();
})

//查询的静态方法
UsersSchema.statics = {
    fetch:function(cb){
        return this
               .find()
               .sort('meta.updateAt')//排序
               .exec(cb)//回调
    },
    findById:function(id,cb){//根据id查询单挑数据
        return this
               .findOne({_id:id})
               .exec(cb)
    }
}

//将其暴露出去
module.export = UsersSchema