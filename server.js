var express = require('express'); //获取express构造函数
var querystring = require("querystring");
var bodyParser = require('body-parser'); //作为express的插件
var mongoose = require("mongoose"); //导入mongoose库
var fs = require("fs");
var app = express();


 //处理通过表单提交的数据，放到req对象上面去了

app.post('/api/regist', function(req, res) {

})

app.post('/api/login', function(req, res) {

})

app.listen(8080, function() {
	console.log("创建成功！")
})