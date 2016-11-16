var fs = require('fs');
var data = fs.readFileSync('helloworld.txt','utf-8');
console.log(data);
console.log('结束了');