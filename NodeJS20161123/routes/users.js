/**
 * 路由级中间件和应用级中间件一样，
 * 只是它绑定的对象为 express.Router()。
 * 
 * 路由级使用 router.use() 或 router.VERB() 加载。
 * 
 * 一、其中同一个HTTP请求可以写多个中间件形成
 * 中间件栈 通过next()来执行其他中间件函数
 * 在此称之为“路由句柄” 但它也有多种形式，可以是
 * 一个函数、一个函数数组或者是两者混合
 * 
 * 二、同时同一个路由可以写多个中间件或中间件栈来
 * 进行操作 面对不同的需求进行调整 可用next('route')
 * 来执行其他中间件
 * 
 * 
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
/**
 * 这里只是一个中间件，显示任何指向
 * get方式访问users的HTTP请求信息
 * 
 * 且为匹配当前文件的根路径请求
 */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //res.render('index', { title: 'LJXIN' });
  //res.render('error',{message:'老子不相信'})
  res.render('hello',{title:'ljiaxin'});
});


/**
 * 其中这个部分是为了返回这个路由对象
 * 好在应用入口文件也就是app.js中来进行
 * 路由的挂载
 */
module.exports = router;
