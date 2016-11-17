var http = require('http');

http.createServer(function(req,res){
    /**显示写入指定响应头 */
    res.writeHead(200,{'Content-Type':'text/html'});
    /**写入响应体 */
    res.write('<h1>ljxin</h1>');
    /**结束并发送 */
    res.end('<p>Hello World</p>');
}).listen(3000);/**端口监听在3000 */