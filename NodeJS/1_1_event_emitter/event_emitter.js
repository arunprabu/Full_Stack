// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', function(){
    console.log("Event Fired");
});

setTimeout(function(){ 
   eventEmitter.emit('myCustomEvent'); 
}, 5000);
