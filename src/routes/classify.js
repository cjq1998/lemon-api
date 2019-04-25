var express = require('express');
var router = express.Router();
let { getCustom, getClassify, addClassify } = require("./classify-api");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//查找自定义分类图标
router.get("/getCustom", getCustom);

//查找分类图标
router.post("/getClassify", getClassify);

//查找分类图标
router.post("/addClassify", addClassify);
module.exports = router;