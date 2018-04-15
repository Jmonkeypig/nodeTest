var express = require('express');
var fs = require("fs");
var boot = require('bootstrap');
var app = express();


//ejs setting
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//public 이라는 디렉토리에 파일을 넣으면 정적인 데이터를 불러올 수 있다
app.use(express.static('public'));
app.get('/', function(req, res){
    res.send('Hello home page');
});
app.get('/route', function(req, res){
    res.send('Hello Jake, <img src="/Jakesalad.png">')
})
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});

app.get('/app', function(req, res){
  res.render('app', {
            title: "MY HOMEPAGE",
            length: 5
  });
});


app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});

var router = require('./js/ejsexam')(app, fs);
var router2 = require('./js/topic')(app, fs);
