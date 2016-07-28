var http = require('http');

// createServer is a method
// request comes loaded with info about the requester
var server = http.createServer(function(req, res){
									// url is property of req object
	console.log('request was made: ' + req.url);
	// response headers
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hey ninjas');
});

			// port  // ip address (127.0.0.1 is localhost)
server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');

/////////// response headers //////////////
// Content-Type - http, json, text/plain, etc.
// Status - 200, 404, 500, etc.