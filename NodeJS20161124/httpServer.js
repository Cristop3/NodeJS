/**测试一 */
// var http = require('http');

// http.createServer(function(request,response){
//     response.writeHead('200',{"Content-type":"text/html"});
    
//     response.write('hello nodejs');

//     response.end();
// }).listen(3000)

/**测试二 */
//var http = require('http');

// http.get('http://localhost:3000',function(request,response){
//     //response.writeHead('200',{"Content-type":"text/html"});

//    // response.write('hello nodejs222');

//     //response.end();
//     const statusCode = response.statusCode;
//     if (statusCode !== 200) {
    
//   } 
// })

/**测试三 */
// var http = require('http');
// var url = require('url');

// http.createServer(function(req,res){
//    var pathname = url.parse(req.url).pathname;
//    console.log(req)
//    res.writeHead('200',{"Content-type":"text/html"});
//    res.write('你所get请求的是' + pathname)
//    res.end()
// }).listen(3000);

/**测试四 */
var http = require('http');
var url = require('url');
var file = require('fs');

http.createServer(function(req,res){
    var routeName = url.parse(req.url).pathname.substr(1);
    //res.write('<h3>你所情请求的是'+routeName+'</h3><br/>');
    console.log('你所情请求的是'+routeName);
    file.readFile(routeName,function(err,data){
        if(err){
            res.writeHead(404,{'Content-type':'text/html'});
            res.write('<h3>请求的东西不存在</h3><br/>');
        }else{
            res.writeHead(200,{'Content-type':'text/html'});
            res.write('<h3>对应服务器端给你的响应是:</h3><br/>');
            res.write(data.toString())
        }
        res.end();
    })
}).listen(3000)