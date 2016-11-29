var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//例如此处的第三方中间件解析cookie，可以在应用级加载，也可以在路由级加载
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

/**实验添加路由 */
var login = require('./routes/login');//登录
var register = require('./routes/register');//注册
var logout = require('./routes/logout');//退出登录
var post = require('./routes/post');//发布信息

var app = express();

// view engine setup
/**
 * views, 放模板文件的目录
 * view engine, 模板引擎
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//express.static 是 Express 唯一内置的中间件。
//它基于 serve-static，负责在 Express 应用中提托管静态资源。
//每个应用可有多个静态目录。
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

/**使用实验路由 */
app.use('/login',login);
app.use('/register',register);
app.use('/logout',logout);
app.use('/post',post);

/**
 * 20161129 应用级中间件绑定到 app 对象 使用 app.use() 和 app.METHOD()，
 *  其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写
 * 
 */

// catch 404 and forward to error handler
//这是一个没有挂载路径的"常规404中间件"，应用的每个请求都会执行该中间件
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
//这是一个没有挂载路径的"错误处理中间件"，应用的每个请求都会执行该中间件
/**错误处理中间件有 4 个参数，定义错误处理中间件时必须使用这 4 个参数。
 * 即使不需要 next 对象，也必须在签名中声明它，
 * 否则中间件会被识别为一个常规中间件，不能处理错误。
 * 
 */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
