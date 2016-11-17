/**这个是用户退出登录路由 */
var express = require('express');

var router = express.Router();

router.get('/',function(req, res, next){
    res.render('logout',{})
})

module.exports = router;
