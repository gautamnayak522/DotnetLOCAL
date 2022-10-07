import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:any[]=[{pname:"Mobile",price:"10000",qty:"5"},{pname:"laptop",price:"25000",qty:"10"},{pname:"Charger",price:"500",qty:"15"}];

  discount(a:any)
  {

    return a-a*5/100;
  }
  constructor() { 
    console.log(this.product);
  }

  ngOnInit(): void {
  }

}
