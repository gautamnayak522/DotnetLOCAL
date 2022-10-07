var test = require('./calc.js');
console.log(test.testing());
console.log(test.add(2,3));

console.log("---------------------------------");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});


