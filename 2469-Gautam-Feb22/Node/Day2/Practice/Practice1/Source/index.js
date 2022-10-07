var fs = require('fs');
fs.writeFile('person.txt', 'Hello World', function (err) { 
    if (err){
        console.log(err);
    }
    else{
        console.log("Write operation completed.");
    }
});

fs.appendFile('person.txt', ' Hello India', function (err) { 
    if (err){
        console.log(err);
    }
    else{
        console.log('Append operation complete.');
    }
});