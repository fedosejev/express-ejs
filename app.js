var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8080;

var router = express.Router();

router.get('/', function (request, response) {
  response.render('index', { title: 'Welcome!' });
});

router.get('/student', function (request, response) {
  response.render('index', { title: 'Welcome, student!' });
});

router.get('/teacher', function (request, response) {
  response.render('index', { title: 'Welcome, teacher!' });
});

app.use('/', router);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
