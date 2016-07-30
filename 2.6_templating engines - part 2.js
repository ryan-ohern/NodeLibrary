var express = require('express');

var app  = express();
// set view engine to express
app.set('view engine', 'ejs');
// defaults to looking inside the /views folder 

app.get('/', function(req, res){
	res.sendFile(__dirname + '/2.5_index.html');
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/2.5_contact.html');
});

app.get('/profile/:name', function (req, res){
	// render view instead of send page - doesn't need /views b/c it assumes that directory
	// to pass data to view is by passing object as second parameter to render method
	var data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']} ;
	res.render('profile', {person: req.params.name, data: data});
	// res.render('profile');
});

app.listen(3003);