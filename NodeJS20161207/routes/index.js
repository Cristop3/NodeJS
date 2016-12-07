//引入express模块
var express = require('express');
var router = express.Router();

//引入service层对象
var service = require('../service/service');
//var message = require('../service/message');

/*路由中间件之主页*/
router.get('/', function (req, res, next) {
  service.finding(function (err, docs) {
    //渲染主页
    res.render('index',{mess:docs});
  })
  //res.render('index');
});

/*路由中间件之get登录 */
router.get('/login', function (req, res, next) {
  //渲染登录页面
  res.render('login');
});

/*路由中间件之post登录 */
router.post('/login', function (req, res, next) {
  //调用service共享的操作数据模型方法
  service.find(req.body, function (err, docs) {
    //console.log(docs)
    if (docs.length == '') {
      //数据库未找到对应值 跳转至注册页面
      res.redirect('./register');
    } else {
      //将用户名和用户ID写入session当中
      req.session.user = docs[0].username;
      req.session.userID = docs[0]['_id'];
      //找到数据 则跳到用户主页
      res.redirect('./user')
        //res.render('user',{info:docs[0]});
    }
  })
});

/**路由中间件之get注册 */
router.get('/register', function (req, res, next) {
  res.render('register');
});

/**路由中间件之post注册 */
router.post('/register', function (req, res, next) {
  var obj = req.body
  service.add(obj);
  //同时写入进session
  req.session.user = obj.username;
  //注册成功 跳转至用户主页
  res.redirect('/user');
});

/**路由中间件之get用户页 */
router.get('/user', function (req, res, next) {
  res.render('user', {
    username: req.session.user
  })
});

/**路由中间件之post发布消息 */
router.post('/publish', function (req, res, next) {
  var obj = req.body;
  obj.userID = req.session.userID;
  service.publish(obj);

  //跳转到主页
  res.redirect('/');
})

module.exports = router;