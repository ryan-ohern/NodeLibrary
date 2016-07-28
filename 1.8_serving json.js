var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
										// specify json
	res.writeHead(200, {'Content-Type': 'application/json'});
	var myObj = {
		name: 'ryu',
		job: 'ninja',
		age: 29
	};
	// .end expects string or buffer so we cannot send an object
	// res.end(myObj);
	res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');