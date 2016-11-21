var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
/**测试新增路由 */
var world = require('./routes/world');

/**实验添加路由 */
var login = require('./routes/login');//登录
var register = require('./routes/register');//注册
var logout = require('./routes/logout');//退出登录
var post = require('./routes/post');//发布信息

var app = express();

/**20161121 实验添加mongoDB数据库 */
var mongoose = require('./mongoose');//引入mongoose模块
var config = require('./settings');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/world',world);

/**使用实验路由 */
app.use('/login',login);
app.use('/register',register);
app.use('/logout',logout);
app.use('/post',post);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
