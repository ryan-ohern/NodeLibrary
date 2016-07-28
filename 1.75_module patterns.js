// takes an array as a parameter
var counter = function(arr){
	return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
	// use a template string with backtick
	return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;


// EXPORTING OPTION 1 ///////////////////////////
// module.exports is an empty object
// example - module.exports.counter = counter;
// example - counter property of object is equal to function
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;


// EXPORTING OPTION 2 ///////////////////////////
// set functions equal to the module.exports.object
module.exports.counter = function(arr){
	return 'There are ' + arr.length + ' elements in this array';
};

module.exports.adder = function(a,b){
	// use a template string with backtick
	return `The sum of the 2 numbers is ${a+b}`;
};

module.exports.pi = 3.142;


// EXPORTING OPTION 3 ///////////////////////////
// using an object literal 
module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
};


/////////////////////////////////// INSIDE app.js ///////////////////////////////////////////
var stuff = require('./1.75_module patterns');


console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));