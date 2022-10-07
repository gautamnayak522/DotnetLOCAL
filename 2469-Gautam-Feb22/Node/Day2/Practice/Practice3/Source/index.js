var fs = require('fs');

const main = async () => {
    fs.readFile('fileOne.txt', function (err, data) {
        if (err) throw err;
        console.log(data.toString());
    });

    await fs.readFile('fileTwo.txt', function (err, data) {
        if (err) throw err;
        console.log(data.toString());
    });
}

main()
