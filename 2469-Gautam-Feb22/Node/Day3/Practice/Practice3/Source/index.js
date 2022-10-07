
//Global
console.log("Hello");
console.log( __filename );
console.log( __dirname );


function printHello() {
    console.log( "Hello, World!");
 }

console.time("Getting dataaaaaaa");
// Do some processing here...
setTimeout(printHello, 2000);
// 
console.timeEnd('Getting dataaaaaaa');

//ENV
require('dotenv').config();
console.log('The value of PORT is : ', process.env.port);


//FS
var fs = require('fs');
//Synchronous read
var datas = fs.readFileSync('input.txt');
console.log("Synchronous read : " + datas.toString());

//Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });


//appending file

fs.appendFile('input.txt', ' HelloAdded ', function (err) {
    if (err) {
        return console.error(err);
    }
    else {
        return console.log("File Appended");
    }
});


//JSON
var jsondata = fs.readFileSync('data.json');
const newdata = { "Name": "PQR", "Id": 3 };

let currentjson = JSON.parse(jsondata.toString());
console.log("Currentjson is : "+ JSON.stringify(currentjson));

currentjson.push(newdata);
const updatedjson = JSON.stringify(currentjson);
console.log("updated json is : "+ updatedjson);



fs.writeFile("testdata.txt",updatedjson,function(err) {
        if (err) {
           return console.error(err);
        }
        else{
        return console.log("Json updated");
    }
    });

    fs.writeFile("data.json",updatedjson,'utf8',function(err) {
        if (err) {
           return console.error(err);
        }
        else{
        return console.log("Json updated");
        
    }
    });
    // fs.writeFileSync("data2.json",updatedjson);



  //OS
  const os = require('node:os');
  console.log("-------------------> "+os.platform());
  console.log("-------------------> "+os.hostname());
  console.log("-------------------> "+os.type());
  console.log("-------------------> "+JSON.stringify(os.userInfo()));
  console.log("-------------------> "+os.userInfo().username);

    //URL
    var url = require('url');
    var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
    var q = url.parse(adr, true);
    console.log("----------------url---"+q.host);
    console.log("----------------url---"+q.pathname);
    console.log("----------------url---"+ JSON.href);
    console.log("----------------url---"+ JSON.stringify(q));