var events = require('events');
var util = require('util');

// EventEmitter is a constructor
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
	console.log(mssg);
});
// first arg is the name of event, second arg is the parameter we are passing (mssg)
myEmitter.emit('someEvent', 'the event was emitted');


/////////////////////////////////////////////////////////////
// create new object contructor
var Person = function(name){
	this.name = name;
};

// any new Person inherit the EventEmitter
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

// wire up event listeners
// cycles through each in array
people.forEach(function(person){
			// custom event
	person.on('speak', function(mssg){
		console.log(person.name + ' said: ' + mssg);
	});
});

// call events

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');