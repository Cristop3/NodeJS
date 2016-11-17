var express = require('express');
var router = express.Router(); //创建模块化安装路径的处理程序

/* GET home page. */
router.get('/', function(req, res, next) {
  //调用模板引擎 并将产生的页面直接返回给客户端
  //接收两个参数：“模板名称即在views目录下的模板文件名” 和 “要传递给模板的数”
  res.render('index', { title: 'Express' });
});

/** 自己测试添加一个新的路由 Get hello --HelloWorld 界面 */
router.get('/hello',function(req, res, next){
  res.send('hello world ljxin');
})

/** 再测试一下路由的模式匹配和参数 不仅仅可以使用字符常量也可以使用字符串的模式匹配*/
router.get('/ab*cd',function(request, response, next){
  response.send('测试路由匹配模式') 
})

/** 测试路由回调 */
router.get('/ljx/:id',function(req,res,next){
  if(req.params.id == 0){
    next()
  }else{
    next('route')
  }
},function(req,res,next){
  res.send('get参数传递的是0')
})

router.get('/ljx/:id',function(req,res,next){
  res.send('get参数传递的不是0')
})



module.exports = router;//返回了由express.Router()实例化的对象 且其中包含了一个get的方法
