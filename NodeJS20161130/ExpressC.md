Express 使用中间件 笔记 20161129晚
中间件-->
一、何为Express的中间件：
    中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）,
     响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，
     一般被命名为 next 的变量。

二、中间件的功能包括：
    ①执行任何代码
    ②修改请求和响应对象
    ③终结请求-响应循环
    ④调用堆栈中的下一个中间件

三、Express应用包含如下几种中间件：
    ①应用级中间件
        app.use() || app.method()
    ②路由级中间件
        router = express.Router()
        router.get('',callback)
        module.export = router
    ③错误处理中间件(声明4个必要参数)
        app.use(function(err, req, res, next){})
    ④内置中间件
        从Express4.x开始，除了 express.static, Express 以前内置的中间件现在已经全部单独作为模块安装使用了
        (express.static是Express唯一的内置中间件，它基于serve-static.
        负责在Express应用中提托管静态资源)
    ⑤第三方中间件

路由-->
一、何为Express的路由：
    路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。
    路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成，它的结构如下： app.METHOD(path, [callback...], callback)，
     app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法， path 是服务器上的路径， callback 是当路由匹配时要执行的函数。

二、路由方法:
    路由方法源于 HTTP 请求方法，和 express 实例相关联
    Express 定义了如下和 HTTP 请求对应的路由方法： get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge,
     propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect。
     app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件

三、路由路径：
    路由路径和请求方法一起定义了请求的端点，它可以是“字符串”、“字符串模式”或者“正则表达式”

四、路由句柄：
    可以为请求处理提供多个回调函数，其行为类似 中间件。唯一的区别是这些回调函数有可能调用 next('route') 方法而略过其他路由回调函数。
    可以利用该机制为路由定义前提条件，如果在现有路径上继续执行没有意义，则可将控制权交给剩下的路径。
    路由句柄有多种形式，可以是“一个函数”、“一个函数数组”，或者是“两者混合”

五、响应方法：
    响应对象（res）的方法向客户端返回响应，终结请求响应的循环。如果在路由句柄中一个方法也不调用，来自客户端的请求会一直挂起。
    ①res.download() -- 提示下载文件
    ②res.end() -- 终结响应处理流程
    ③res.json() -- 发送一个JSON格式的响应
    ④res.jsonp() -- 发送一个支持JSONP的JSON格式的响应
    ⑤res.redirect() -- 重定向请求
    ⑥res.render() -- 发送各种类型的响应
    ⑦res.send() -- 发送各种类型的响应
    ⑧res.sendFile() -- 以八位字节流的形式发送文件
    ⑨res.sendStatus() -- 设置响应状态代码，并将其以字符串形式作为响应体的一部分发送

六、express.Router():
    可使用 express.Router 类创建模块化、可挂载的路由句柄。Router 实例是一个完整的中间件和路由系统，因此常称其为一个 “mini-app”。