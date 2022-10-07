var fs = require('fs');

fs.readFile('address.txt', function (err, data) {
    if (err) throw err;
    const str = data.toString();
    const consonants = str.match(/[^-.aeiou,\r\n{0-9} ]/gi);
    const countconsonants = consonants.length;
    console.log(str);
    console.log(consonants);
    console.log("Number of Consonants : " + countconsonants);
});




fs.writeFile('person.txt', 'hello!', function () { });

fs.unlink('person.txt', function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File deleted!');
        console.log('----------------------------');
    }
});
