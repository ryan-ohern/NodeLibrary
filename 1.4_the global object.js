// console
console.log('hey ninjas');

// setTimeout
// fire function after 3 seconds have passed
setTimeout(function(){
	console.log('3 seconds have passed');
}, 3000);

// setInterval
// will run function every 2 seconds
var time = 0;
setInterval(function(){
	time += 2;
	console.log(time + ' seconds have passed');
}, 2000);

// clearInterval
var timer = setInterval(function(){
				time += 2;
				console.log(time + ' seconds have passed');
				if (time > 5){
					clearInterval(timer);
				}
			}, 2000);

// dirName
console.log(__dirname);

// fileName
console.log(__filename);