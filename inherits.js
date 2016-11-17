var util = require('util');
/*构造函数 —— 基类 */
function Base(){
    this.name = 'ljxin';
    this.base = 1994;
    this.sayHello = function(){
        console.log('Hello '+ this.name)
    }
}
/**在基类Base的原型对象上添加方法 showName */
Base.prototype.showName = function(){
    console.log(this.name)
}
/**构造函数--子类 */
function Sub(){
    this.name = 'sub'
}
/**调用模块util切继承基类 */
util.inherits(Sub,Base)
var baseObj = new Base();
baseObj.showName(); //原型中定义的方法执行为 ljxin
baseObj.sayHello();//本身类定义的方法执行为 Hello ljxin
console.log(baseObj);

var subObj = new Sub();
subObj.showName();
//subObj.sayHello();
console.log(subObj)
