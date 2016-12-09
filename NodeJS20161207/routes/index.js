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
      res.render('index', {
        mess: docs
      });
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
      //console.log(docs[0])
      //console.log('当前存入session中用户id为'+req.session.userID)
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
  //session中获取用户ID
  //console.log('用户界面下获取用户id为：'+req.session.userID);
  var id = req.session.userID;
  //查询当前用户所发布的信息
  service.findingById(id,function (err, docs) {
    if (docs.length == '') {
      res.render('user', {
        username: req.session.user,
        mess: ""
      })
    } else {
      res.render('user', {
        username: req.session.user,
        mess:docs
      })
    }

  })

});

/**路由中间件之post发布消息 */
router.post('/publish', function (req, res, next) {
  var obj = req.body;
  //console.log('发布消息获取session中userID为'+req.session.userID);
  obj.userID = req.session.userID;
  service.publish(obj);

  //跳转到主页
  res.redirect('/');
})

/**路由中间件之get删除消息 */
router.get('/delete',function(req, res, next){
  //获取要删除的数据id
  var id = req.query.id;
  service.delete(id);
  res.redirect('/user')
})

/**路由中间件之get修改消息 */
router.get('/update',function(req, res, next){
  //获取消息id
  var messID = req.query.id;
  
  service.findMess(messID,function(err,docs){
    res.render('update',{
      mess:docs
    })
  })
})

/**路由中间件之post修改消息 */
router.post('/update',function(req, res, next){
  var _update = {
    title:req.body.title,
    content:req.body.content
  }
  service.update(req.body.id,_update);
  res.redirect('/')
})

module.exports = router;