var fs = require('fs');

// deleting a file
fs.unlink('writeMe.txt');

/// SYNC ///

// make a directory
fs.mkdirSync('stuff');

// delete a directory
fs.rmdirSync('stuff');

/// A-SYNC ///

// make a directory
fs.mkdir('stuff', function(){
	// read the file
	fs.readFile('readMe.txt', 'utf8', function(err, data){
		// write file
		fs.writeFile('./stuff/writeMe.txt', data);
	});
});

// cannot remove a directory if it's not empty
fs.unlink('./stuff/writeMe.txt', function(){
	fs.rmdir('stuff');
});