var http = require('http');
var fs = require('fs');

// will split data up and pass it in chunks
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');
			// data is an event
myReadStream.on('data', function(chunk){
	console.log('new chunk received:');
	myWriteStream.write(chunk);
});

// rather than manually listening for a data event and then writing to a new stream
///////////////////// use pipe ///////////////////////////////////////////////////////

// pipe from a readable stream only (not writable)
// same as code above
myReadStream.pipe(myWriteStream);

////////////////////////////////////////////////////////////////////////

var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
	// res is a writable stream
	myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');