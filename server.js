const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

// app.get('/', (req, res) => res.send('Hello World!'))


// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');

// Set up a static public directory
app.use(express.static('./public'));


// Route / Controller
app.get('/', (req, res) => res.render('index'));
app.listen(3020, () => console.log('Example app listening on port 3020!'))