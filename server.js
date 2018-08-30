const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// EXPRESS
const app = express();


// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));

// express-handlebars
app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');


// static content
app.use(express.static('./public'));


// ROUTES
var routes = require('./routes/index');
app.use('/', routes);
// app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))