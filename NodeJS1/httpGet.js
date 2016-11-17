var http = require('http');

http.get({host:'www.xxx.com'},function(res){
    /**这里的res = response = http.clientRequest它是由
     * http.request或http.get返回产生的对象 提供一个response事件
     */
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log(data);
    })
})