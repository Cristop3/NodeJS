//引入express模块
var express = require('express');
var router = express.Router();

//引入service层对象
var service = require('../service/service');

/*路由中间件之主页*/
router.get('/', function(req, res, next) {
  //渲染主页
  res.render('index');
});

/*路由中间件之get登录 */
router.get('/login',function(req, res, next){
  //渲染登录页面
  res.render('login');
});

/*路由中间件之post登录 */
router.post('/login',function(req, res, next){
  //调用service共享的操作数据模型方法
  service.find(req.body,function(err,docs){
    //console.log(docs)
    if(docs.length == ''){
      //数据库未找到对应值 跳转至注册页面
      res.redirect('./register');
    }else{
      //写入session当中
      req.session.user = docs[0].username;

      //找到数据 则跳到用户主页
      console.log(docs[0])
      res.redirect('./user')
      //res.render('user',{info:docs[0]});
    }
  })
});

/**路由中间件之get注册 */
router.get('/register',function(req, res, next){
  res.render('register');
});

/**路由中间件之post注册 */
router.post('/register',function(req, res, next){
  var obj = req.body
  service.add(obj,function(err, docs){
    //同时写入进session
    console.log(req.session.user);
    req.session.user = docs[0].username;

    //注册成功 跳转至用户主页
    res.redirect('/user');
  })
});

/**路由中间件之get用户页 */
router.get('/user',function(req, res, next){
  //每次get到用户页 进行查询操作
  // service.find({},function(err,docs){
  //   //console.log(docs);
  //   //console.log(docs.username)
  //   //console.log(docs[0].username)
  //   res.render('user',{demo:docs});
  // })
  res.render('user',{username:req.session.user})
})

module.exports = router;
