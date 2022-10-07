function myDisplayer(some) {
    console.log(some); 
  }
  
  function myCalculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);