var http = require('http');
var server = new http.Server();
server.on('request',function(req,res){
    res.writeHead(200,{'Content-Type':"text/html"})
    res.write('<h1>LIJIAXIN</h1>')
    res.end('<h2>Hello Meto</h2>')
})
server.listen(3000)