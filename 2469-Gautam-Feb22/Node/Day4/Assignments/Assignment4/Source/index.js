
const PORT = 3001;
const hostname = 'localhost';

const fs = require('fs');

var filedata = fs.readFileSync('data.txt');

const http = require('http');

http.createServer(function (req, res) {

  if (req.url == "/uploads") {
    res.write(filedata);
  }
  else {
    res.write("please Go to http://localhost:3001/uploads");
  }
  console.log("file running");
  res.end();
}).listen(PORT, () => {
  console.log(`Server running at ${hostname}:${PORT}`);
});

