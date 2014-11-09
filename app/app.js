'use strict';

var dbname     = 'jinglegram';
var express    = require('express');
var path       = require('path');
var initMongo  = require('./lib/init-mongo.js');
var initRoutes = require('./lib/init-routes.js');
var app        = express();
var port       = 3000;

app.set('views', __dirname, 'views');
app.set('view engine', 'ejs');

//-------- PIPELINE BEGINS --------//
app.use(initMongo.connect);
app.use(initRoutes);
//app.use(express.favicon());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.bodyParser({limit: '500mb'}));
app.use(express.methodOverride());
// app.use('/fonts',express.static(path.join(__dirname, 'static/fonts')));
// app.use('/js',express.static(path.join(__dirname, 'static/js')));
// app.use('/css',express.static(path.join(__dirname, 'static/css')));
// app.use('/img',express.static(path.join(__dirname, 'static/img')));
//
// app.post('/')
// app.get('/', function (req, res) {
//   res.render('home/index.ejs');
// });

// app.use(function (req,res) {
//   res.render('404', {url:req.url});
// });
app.use(app.router);
//-------- PIPELINE ENDS --------//

var server = require('http').createServer(app);
server.listen(port, function(){
  console.log('Node server listening on port ' + port);
});

module.exports = app;
