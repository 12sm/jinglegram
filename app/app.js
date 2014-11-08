'use strict';
var dbname    = 'jinglegram';
var http      = require('http');
var express   = require('express');
var path      = require('path');
var initMongo = require('./lib/init-mongo.js');
var app       = express();


app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(initMongo.connect);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/fonts',express.static(path.join(__dirname, 'static/fonts')));
app.use('/js',express.static(path.join(__dirname, 'static/js')));
app.use('/css',express.static(path.join(__dirname, 'static/css')));
app.use('/img',express.static(path.join(__dirname, 'static/img')));
app.get('/', function (req, res) {
  res.render('home/index.ejs');
});

app.use(function (req,res) {
  res.render('404', {url:req.url});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
