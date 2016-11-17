var fs = require('fs');
fs.readFile('helloworld.txt','utf-8',function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});
console.log('结束了');