var events = require('events')
var eventEmitter = new events.EventEmitter();


function c1() {
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}

eventEmitter.once('eventOnce', () => console.log('eventOnce once fired'));  


eventEmitter.on('eventOne', c1); 
eventEmitter.on('eventOne', c2);

eventEmitter.emit('eventOne');
eventEmitter.emit('eventOnce');
eventEmitter.emit('eventOnce');

eventEmitter.off('eventOne', c1);
//eventEmitter.off('eventOne', c2);

eventEmitter.emit('eventOne'); 