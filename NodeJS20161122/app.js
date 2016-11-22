// 加载依赖库 原来这个类库都封装在connect中 现在需要单独加载
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 加载路由控制
var index = require('./routes/index');
var users = require('./routes/users');

/**实验添加路由 */
var login = require('./routes/login');//登录
var register = require('./routes/register');//注册
var logout = require('./routes/logout');//退出登录
var post = require('./routes/post');//发布信息

// 创建项目实例
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test?ljx=125');

// view engine setup(定义ejs模板引擎和模板文件位置 也可以使用jade或者其他模型引擎)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//设置模板文件的后缀名

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));//定义icon图标

/**这里体会express框架中使用use来挂载中间件机制 所以顺序很重要*/

//定义日志和输出级别
app.use(logger('dev'));

//定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//定义cookie解析器
app.use(cookieParser());

//定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

//匹配路径和路由
app.use('/', index);
app.use('/users', users);

/**使用实验路由 */
app.use('/login',login);
app.use('/register',register);
app.use('/logout',logout);
app.use('/post',post);

// catch 404 and forward to error handler 404错误处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err); /**这里当发生404错误时 将执行权利传递到第三个中间件 */
});

// error handler //生产环境 500错误处理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//输出模型app
module.exports = app;
