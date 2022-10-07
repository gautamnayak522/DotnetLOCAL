import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childtoparent';
  count:number=0;
  name:String=""
  display(n:String){
    this.count=this.count+1;
    this.name=n;

  }
}
