import { Component} from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent{

  name="Print Alphabets from custom Component";
  printAlphabets() {
    var i=65;
    var j=91;
    var str;
    var res:string='';
    for(var k=i;k<j;k++){
      str=String.fromCharCode(k);
      res+=str+" ";
    }
    return res;
  }
  
}
