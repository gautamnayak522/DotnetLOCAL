var util = require('util');
var txt = 'Congratulate %s on his %dth birthday! meeting with %s at office';
var result = util.format(txt, 'ABC', 8,'xyz');

console.log(result);

console.log(util.format('%s,%s and %s %d %s', 'foo', 'bar', 'baz',9,9099));