// var mongoose = require('mongoose');
// var model = require('../model/user');
// var testModel = model.Demo;

// mongoose.connect('mongodb://localhost/dbTest');
var express = require('express');
var router = express.Router();
var testModel = require('../model/user');
var service = require('../service/user');
//var testModel = new testModels();
//console.log(testModels)
//var testModel = testModels.demo;
// //console.log(testModel)

// 测试——路由中间件
router.get('/', function (req, res, next) {
    // testModel.find(function (err, docs) {
    //     if (docs.length == '') {
    //         res.render('hello',{
    //             title:'哈哈'
    //         });
    //     } else {
    //         res.render('index', {
    //             title: '测试',
    //             demos: docs
    //         });
    //     }
    // });
    // console.log('刚开始访问路由：'+service.find())
    // if (service.find()) {
        
    //     res.render('index', {
    //         title: '测试',
    //         demos: service.find()
    //     });
    // } else {
    //     res.render('hello', {
    //         title: '哈哈'
    //     });
    // }
    service.find(function(err,doc){
        if (doc.length == '') {
            res.render('hello',{
                title:'哈哈'
            });
        } else {
            res.render('index', {
                title: '测试',
                demos: doc
            });
        }
    })
});

// 跳转到添加数据页面
router.get('/login', function (req, res, next) {
    testModel.find(function (err, docs) {
        res.render('login', {
            title: 'Express+MongoDb示例',
            demos: docs
        });
    });
});

// 添加一条数据
router.post('/login', function (req, res, next) {

    var demo = new testModel({
        uid: req.body.uid,
        title: req.body.title,
        content: req.body.content
    });

    console.log('======================create========================');

    demo.save(function (err, doc) {
        console.log(doc);
        res.redirect('/');
    });

});

// 根据id删除对应的数据
router.get('/del.html', function (req, res, next) {

    var id = req.query.id;

    if (id && id != '') {
        console.log('=====================delete id = ' + id);
        testModel.findByIdAndRemove(id, function (err, docs) {
            console.log(docs);
            res.redirect('/');
        });
    }

});

// 查询对应修改记录，并跳转到修改页面
router.get('/logout', function (req, res, next) {

    var id = req.query.id;

    if (id && id != '') {
        testModel.findById(id, function (err, docs) {
            console.log('========================findById(\"' + id + '\")=======================\n' + docs);
            res.render('logout', {
                title: '修改数据',
                demo: docs
            });
        });
    }

});

// 修改数据
router.post('/logout', function (req, res, next) {

    var demo = {
        uid: req.body.uid,
        title: req.body.title,
        content: req.body.content
    };

    var id = req.body.id;

    if (id && id != '') {
        console.log('=======================update id = ' + id);
        testModel.findByIdAndUpdate(id, demo, function (err, docs) {
            console.log(docs);
            res.redirect('/');
        });
    }

});


module.exports = router;