var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('hello',{title:'lijiaxin1'});
})

router.get('/world2',function(req,res,next){
    res.render('hello',{title:'这个是测试我的world路由下面的world2路由'});
})

module.exports = router;