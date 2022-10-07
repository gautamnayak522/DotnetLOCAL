const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

var fs = require('fs');


fs.writeFile('person.txt', 'Hello ', function (err) { 
    if (err){
        console.log(err);
    }
});

  readline.question(`Enter your name : `, name => {
    
    fs.appendFile('person.txt', `${name}`, function (err) { 
        if (err){
            console.log(err);
        }
        else{
            console.log('Append operation complete.');
        }
    
    });
    readline.close();
  });



