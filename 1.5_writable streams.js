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