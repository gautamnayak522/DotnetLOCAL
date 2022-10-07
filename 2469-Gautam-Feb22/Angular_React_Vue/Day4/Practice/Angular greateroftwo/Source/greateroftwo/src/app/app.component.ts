import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'greateroftwo';
  num1:number=20;
  num2:number=30;
  show:boolean=true;

  get compare(){
    if(this.num1>this.num2)
      return true;
    else
      return false;
    
  }
}

