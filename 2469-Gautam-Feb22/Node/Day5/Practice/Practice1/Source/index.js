var events = require('events')
var eventEmitter = new events.EventEmitter();

eventEmitter.on('start', () => {
    console.log('started');
});

eventEmitter.on('myEvent',(msg)=>{
    console.log(msg);
});

var myEventHandler = function(){
    console.log("------------------");
}
eventEmitter.on('scream',myEventHandler);

eventEmitter.on('additon', (num1, num2) => {
    console.log(`Addition of ${num1} and ${num2} is : ${num1+num2}`);
  });
  
 


eventEmitter.emit('start');
eventEmitter.emit('myEvent','Hello');
eventEmitter.emit('scream');
eventEmitter.emit('additon', 50, 60);
