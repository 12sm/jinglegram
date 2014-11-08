'use strict';
var http    = require('http');
var express = require('express');
var path    = require('path');
var mime    = require('mime');
var mime    = require('fs');
var app     = express();


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function (req, res) {
  res.render('home/index.ejs');
});

app.get('/wtf', function (req, res) {
  res.render('wtf');
});

// app.use(function (req,res) {
//   res.render('404', {url:req.url});
// });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
