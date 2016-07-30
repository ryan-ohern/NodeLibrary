var express = require('express');

var app  = express();

app.set('view engine', 'ejs');
// can specify route
// if you don't, it will run on everything
// middleware will fire when any request is made to /assets (for ex. stylesheet)
									// tells it to go onto next middleware
/*
app.use('/assets', function(req, res, next){
	console.log(req.url);
	// required
	next();
});*/

// built in middleware with express - easier than ^^^^^
	// matching route			// matching location of files
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res){
	res.render('index');
});

app.get('/contact', function(req, res){
	// middelware is what runs after request, before response 
	res.render('contact');
});

app.get('/profile/:name', function (req, res){
	var data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']} ;
	res.render('profile', {person: req.params.name, data: data});
});

app.listen(3003);