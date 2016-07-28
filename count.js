// takes an array as a parameter
var counter = function(arr){
	return 'There are ' + arr.length + ' elements in this array';
};

// call counter and pass in an array
console.log(counter(['shaun', 'crystal', 'ryu']));

// to make function available outside of this module
module.exports = counter;