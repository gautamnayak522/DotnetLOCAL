import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  num1:number=0;
  num2:number=0;
  result="";

  area(){
    this.result="Area of Rectangle is : "+(this.num1*this.num2);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
