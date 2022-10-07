import React, { Component } from 'react';
var name = 'Print Alphabets from custom Component';
function printAlphabets(){
  var i = 65;
  var j = 91;
  var str;
  var res= '';
  for (var k = i; k < j; k++) {
    str = String.fromCharCode(k);
    res += str + ' ';
  }
  return res;
}
class Alphabet extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <p>Task : { name }</p>
            <p>{ printAlphabets() }</p>
            </div>
        );
    }
}
 
export default Alphabet;