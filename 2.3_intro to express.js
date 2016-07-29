var express = require('express');
// what's return in ^^ is a function, so we fire this function in our app
var app  = express();
// also gain access to http methods (get, post, delete, put)

// ROUTES
					// express extends functionality (methods) of req and res objects
app.get('/', function(req, res){
	res.send('this is the homepage');
});

app.get('/contact', function(req, res){
	res.send('this is the contact page');
});

app.listen(3000);

// RESPONDING TO REQUESTS
/*
			// fire function when route is accessed
GET - app.get ('route', function)
POST - app.post ('route', function)
DELETE - app.delete ('route', function)
*/
