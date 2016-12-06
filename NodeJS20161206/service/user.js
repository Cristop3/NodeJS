/**service 调用model层 */
var model = require('../model/user');

var obj = {};

obj.find = function (cb) {
    model.find(function (err, docs) {
        // console.log(docs);
        // if (docs.length == '') {
        //     return false
        // } else {
        //     console.log('有数据')
        //     return docs
        // }
        cb(err,docs)
    })
}

// obj.find = model.find(function (err, docs) {
//     if (docs.length == '') {
//         return false
//     } else {
//         console.log('有数据')
//         return docs
//     }
// })

module.exports = obj;