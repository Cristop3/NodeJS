var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //res.render('index', { title: 'LJXIN' });
  //res.render('error',{message:'老子不相信'})
  res.render('hello',{title:'ljiaxin'});
});

module.exports = router;
