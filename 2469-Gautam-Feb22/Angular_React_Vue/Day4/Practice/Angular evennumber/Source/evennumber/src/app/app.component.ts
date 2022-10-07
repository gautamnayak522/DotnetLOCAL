import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'evennumber';
  Numberlist:number[]=[];
  

  ngOnInit(){
    for(var i=0;i<=100;i++){
      this.Numberlist.push(i);
    }
  }
}
