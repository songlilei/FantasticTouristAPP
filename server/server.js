let express = require('express');
let bodyParser =require("body-parser");
let session=require("express-session");
let app=express();
app.use(bodyParser.json());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'tourist'
}))

app.use(function (req,res,next) {
    //更改
    // res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type,Accept');
    res.header('Access-Control-Allow-Credentials',"true");
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
})
app.listen(3000);
let sliders=require("./mock/slider")
//付瑶用来存放用户的数组
let users=[];
app.get('/api/sliders',function(req,res){
    res.json(sliders);
});
//以下是大家获取旅游列表的方法
let lessons = require('./mock/lessons');
app.get('/api/list',function(req,res){
    let {limit, offset} = req.query;
    offset = isNaN(offset) ? 0 : parseInt(offset);
    limit = isNaN(limit) ? 0 : parseInt(limit);
    let data = JSON.parse(JSON.stringify(lessons));
    let total = data.list.length;
    data.list = data.list.slice(offset,offset+limit);
    data.hasMore = offset+limit<total;
    setTimeout(function(){
        res.json(data);
    },2000);
});

//以下是付瑶的登陆注册页面逻辑
//注册接口
app.post('/api/signup',function(req,res){
    let user = req.body;
    let oldUser = users.find(item=>item.username == user.username);
    if(oldUser){
        res.json({code:1,error:'用户名已经被占用!'});
    }else{
        users.push(user);
        res.json({code:0,success:'用户注册成功!'});
    }
});
//登录
app.post('/api/login',function(req,res){
    let user = req.body;
    let oldUser = users.find(item=>item.username == user.username&& item.password == user.password);
    if(oldUser){
        req.session.user = user;
        res.json({code:0,success:'恭喜你，登录成功!',user});
    }else{
        res.json({code:1,error:'用户名或密码错误!'});
    }
});
//退出
app.get('/api/logout',function(req,res){
    req.session.user = null;
    res.json({code:0,success:'退出成功'});
});
//验证用户是否登录
app.get('/api/validate',function(req,res){
    if(req.session.user){
        res.json({code:0,user:req.session.user});
    }else{
        res.json({code:1,error:'此用户未登录'});
    }
});