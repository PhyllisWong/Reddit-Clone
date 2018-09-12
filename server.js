const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const postController = require('./controllers/posts.js');

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

//******************   OLD WAY    ********************//
// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost/reddit-clone', { useMongoClient: true })
// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))

//******************   NEW WAY    ********************//
// Mongoose Connection
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/reddit-clone";
mongoose.connect(
	mongoUri, { useNewUrlParser: true }
);
mongoose.set('debug', true);




// ROUTES
app.use('/', postController);


// Server
app.listen(port, () => {
	console.log(`Example app listening on ${port}`);
});