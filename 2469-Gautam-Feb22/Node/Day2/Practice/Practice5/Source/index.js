var fs = require('fs')

var oldPath = 'person.txt'
var newPath = 'files/person.txt'

fs.rename(oldPath, newPath, function (err) {
  if (err) throw err
  console.log('Successfully moved')
})

