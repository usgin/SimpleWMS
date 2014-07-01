var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

var style = path.join(__dirname, 'styles');
var script = path.join(__dirname, 'scripts');
var home = path.join(__dirname, 'index.html');

app.use('/styles', express.static(style));
app.use('/scripts', express.static(script));

app.get('/', function (req, res) {
  fs.readFile(home, 'utf8', function (err, text) {
  	res.send(text);
  })
});

var server = app.listen(3030, function () {
  console.log('Listening on port %d', server.address().port);
});