var events = require('events')
var eventEmitter = new events.EventEmitter();

eventEmitter.on('start', () => {
    console.log('Exam is started');

    const next = new Date();
   next.setHours(next.getHours() + 3); 
   //next.setSeconds(next.getSeconds() + 10); 

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = next - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        console.log("Remaining Time : " + hours + "h " + minutes + "m " + seconds + "s ");
       
        if (distance < 1000) {
         clearInterval(x);
         eventEmitter.emit('end')
        }
    }, 1000);
});

eventEmitter.on('end',()=>{
    console.log("Exam is Over");
});

eventEmitter.emit('start');

