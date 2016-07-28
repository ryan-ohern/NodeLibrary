// file system
var fs = require('fs');

///// SYNC /////

/////  READING FILES ////////////////////////////////
// this is a syncronous code which means it will read first before moving on
// first arg is file to be read, second arg is the encoding type
var readMe = fs.readFileSync('readme.txt', 'utf8');

console.log(readMe);

/////  WRITING FILES ////////////////////////////////
// first arg is where we want it written to, second arg is data to be written
fs.writeFileSync('writeMe.txt', readMe); // writeMe file is created


///// A-SYNC ///// - non-blocking code

fs.readFile('readme.txt', 'utf8', function(err, data){
	console.log(data);
	fs.writeFile('writeMe.txt', data);
});