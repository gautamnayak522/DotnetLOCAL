console.log("hello");
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
console.log("BaseName : " + path.basename(__filename));