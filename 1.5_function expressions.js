// normal function statement
function sayHi (){
	console.log('hi');
}

sayHi();

// function expression
var sayBye = function(){
	console.log('bye');
};

sayBye();

// pass function into another function
function callFunction(fun){
	fun();
}

callFunction(sayBye);