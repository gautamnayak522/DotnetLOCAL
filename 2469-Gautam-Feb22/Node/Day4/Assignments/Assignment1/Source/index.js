console.log("hello");
const PORT = 3001;
const hostname = 'localhost';
const fs = require('fs');
var jsondata = fs.readFileSync('data.json');

const http = require('http');
http.createServer(function (req, res) {
    res.write(jsondata); 
    res.end(); 
  }).listen(PORT, hostname, () => {
    console.log(`Server running at ${hostname}:${PORT}`);   
  }); 