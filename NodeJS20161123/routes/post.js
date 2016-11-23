/**这个是用户发布信息的路由 */
var express = require('express');

var router = express.Router();

router.get('/',function(req, res, next){
    res.render('post',{});
})

module.exports = router;