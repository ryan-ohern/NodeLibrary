var http = require('http');
var fs = require('fs');

// will split data up and pass it in chunks
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
	console.log('new chunk received:');
	console.log(chunk);
});