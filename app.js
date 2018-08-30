var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Squirrel!');
});

app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});
