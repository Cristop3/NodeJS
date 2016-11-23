/**这个是用户注册路由 */
var express = require('express');

var router = express.Router();

//注册界面路由
router.get('/', function (req, res, next) {
    res.render('register', {});
})

//处理注册路由
router.post('/', function (req, res, next) {
    var b = req.body;

    var _user = {

        username: b.username,

        password: b.password

    }

    var user = new User(_user);

    user.save(function (err, user) {

        if (err) {

            console.log(err);

            return;

        }

        console.log('注册成功');

        res.send('注册成功');

    })
})
module.exports = router;