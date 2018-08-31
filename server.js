const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Port
const port = process.env.PORT || 3000;

// EXPRESS
const app = express();


// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));

// express-handlebars
app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');


// static content
app.use(express.static('./public'));


// Mongoose Connection
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/reddit-clone";
mongoose.connect(
	mongoUri, { useNewUrlParser: true }
);


// ROUTES
const routes = require('./controllers/index');
app.use('/', routes);
require('./controllers/posts.js')(app);


app.listen(port, () => {
	console.log('Example app listening on port 3000!');
});