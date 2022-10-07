import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  num1:number=0;
  num2:number=0;
  add="";
  sub="";
  mul="";

  result(){
    this.add="Addition is : " + (this.num1+this.num2);
    this.sub="Subtraction is : " + (this.num1-this.num2);
    this.mul="Multlipication is : " + this.num1*this.num2;
  }

  constructor() {

  
   }

  ngOnInit(): void {
  
  }

}
