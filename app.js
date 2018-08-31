var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
// REQUIRE HTTP MODULE
var http = require('http');
// INITIALIZE THE GIPHY-API LIBRARY
var giphy = require('giphy-api')();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/hello-gif', function (req, res) {
  var gifUrl = 'https://media.giphy.com/media/k5w4LN7G5mK2I/giphy.gif'
  res.render('hello-gif', {gifUrl: gifUrl})
})

app.get('/greetings/:name', function (req, res) {
  var name = req.params.name;
  res.render('greetings', {name: name});
})

app.get('/', function (req, res) {
  var fetchSplash = "swift";
  if (req.query.term != "" && req.query.term != null && req.query.term != undefined) {
    fetchSplash = req.query.term.toString();
  }
  giphy.search(fetchSplash, function (err, response) {
    res.render('home', {gifs: response.data})
  });
});

app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});
