var express = require('express');

var app  = express();

// ROUTES
app.get('/', function(req, res){
	res.send('this is the homepage');
});

app.get('/contact', function(req, res){
	res.send('this is the contact page');
});
			// how to use a variable inside the url
app.get('/profile/:id', function (req, res){
														// access the variable
	res.send('You requested to see a profile with the id ' + req.params.id);
});

app.listen(3000);