
const PORT = 3000;
const hostname = 'localhost';

const http = require('http');
http.createServer(function (req, res) {
    res.write('Hello World!'); 
    res.end(); 
  }).listen(PORT, hostname, () => {
    console.log(`Server running at ${hostname}:${PORT}`);   
  }); 
