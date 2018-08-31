const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
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
const routes = require('./controllers/index');
app.use('/', routes);
require('./controllers/posts.js')(app);


app.listen(3000, () => console.log('Example app listening on port 3000!'))