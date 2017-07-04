const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use('/libs', express.static('node_modules'));


const home = require('./controllers/home');

app.get('/', home);


var port = process.env.PORT || 3018;

app.listen(port, function() {
    console.log('Server is running at http://localhost:' + port);
});
