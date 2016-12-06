/**这个文件夹schemas是数据集模块 */
var mongoose = require('mongoose');

//声明一个mongoons对象
var UsersSchema = new mongoose.Schema({
    //传入一个JSON对象，该对象形如 xxx:yyyy 
    //yyy是一个Schema.Type，定义了属性类型
    //Schema.Type是由Mongoose内定的一些数据类型，基本数据类型都在其中，他也内置了一些Mongoose特有的Schema.Type。
    //当然，你也可以自定义Schema.Type，只有满足Schema.Type的类型才能定义在Schema内
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
//串行使用pre方法
UsersSchemal.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt = Date.now();
    }else{
        this.meta.updateAt = Date.now()
    }
    //执行下一个方法使用next调用
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