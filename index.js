var http = require('http'),
    express = require('express'),
    path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.use(function (req,res) {
  res.render('404.ejs', {url:req.url});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
