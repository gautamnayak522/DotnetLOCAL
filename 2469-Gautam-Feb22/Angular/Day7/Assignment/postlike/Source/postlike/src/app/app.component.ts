import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postlike';
  data:Array<any>=[];
  count=0;
  test:boolean=false;
  display(arr:Array<String>){
    this.count=arr.length;
    this.data=arr
    this.test=false;
  }
  print(){
    this.test=true;
  }
}
