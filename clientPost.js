var http = require('http');
var querystring = require('querystring');

//这个相当于post的请求体
var contents = querystring.stringify({
    name:'ljxin',
    email:'10445242@qq.com',
    address:'wuxingyilu languangnuodingshan'
})

var options = {
    host:'www.lijiaxin.com', //请求网站的域名或IP地址
    path:'',//请求路径相对于根
    method:'post',//请求方式 默认为GET
    headers:{
        'Content-Type':'',
        'Content-Length':contents.length
    }//请求头的内容
}

//发起请求
var req = http.request(options,function(res){
    //服务器端的响应内容
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log(data);
    })
})

req.write(contents);//写入请求体
req.end();//结束请求