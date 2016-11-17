var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
    /**显示写入请求头 */
    res.writeHead(200,{'Content-Type':'text/html'});
    /**结束并写入 其中util.inspect（API）是将一个对象转化为字符串 */
    res.end(util.inspect(url.parse(req.url,true)));
}).listen(2800)