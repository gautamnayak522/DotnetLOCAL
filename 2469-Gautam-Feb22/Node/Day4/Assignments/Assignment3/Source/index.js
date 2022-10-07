const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var fs = require('fs');
var http = require('http');

fs.writeFile('person.txt', 'Hello ', function (err) {
    if (err) {
        console.log(err);
    }
});

readline.question(`Enter your name : `, (name) => {

    http.createServer(function (req, res) {

        let lowerName = name.toLowerCase();

        res.write("Name is : " + name)


        const vowels = lowerName.match(/[aeiou]/gi);
        res.write("\n First Vowels in Name is :" + vowels[0])

        console.log("file running");
        res.end();
    }).listen(3000, () => {
        console.log(`Server running at port : 3000..`);
    });



    readline.close();
});
