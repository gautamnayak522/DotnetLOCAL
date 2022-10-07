(function() {

    console.log('this is the start');
  
    setTimeout(function cb() {
      console.log('Callback 1: this is a msg from call back');
    }); 
  
    console.log('this is just a message');
  
    setTimeout(function cb1() {
      console.log('Callback 2: this is a msg from call back');
    }, 0);
  
    console.log('this is the end');
  
  })();