var express = require("express");
var logfmt = require("logfmt");
var app = express();
var http = require('http'),
    url = require('url'),
    fs = require('fs');

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {

fs.readFile('./index.html', function(err, data) {
    res.end(data);
  });
  //res.send('I LOVE YOU SHRI');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});