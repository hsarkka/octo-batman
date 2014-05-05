var express = require('express');
var exphbs  = require('express3-handlebars');
var http = require('http');
var path = require('path');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('home');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
