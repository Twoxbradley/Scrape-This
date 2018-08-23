// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('.hbs', exphbs({
    extname: '.hbs',
defaultlayout:"main"
}));


app.set('view engine', '.hbs');

app.get('/', function(req, res) {

});


app.listen(PORT, function() {
    console.log('app listening on localhost:${PORT}');
});