var express = require('express');
var app = express();
var cors = require('cors');
var request = require('request');

app.use(cors())

app.get('/', function (req, res) {
  res.sendfile('./public/index.html');
});

app.get('/login', function (req, res) {
  res.sendfile('./public/login.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
