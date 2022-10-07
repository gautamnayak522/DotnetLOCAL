import { Component, OnInit } from '@angular/core';

import { SharedService } from '../services/shared.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any = [];
  categories: any = [];
  subcategories: any = [];
  // mainImages: any = [];
  pID: number = 4;
  searchKey: any = "";
  productMainImage: any;
  //public productList : any ;
  public filterCategory: any


  constructor(private productservice: SharedService, private cartservice: CartService,private router:Router) { }

  ngOnInit(): void {
    //this.data = this.productservice.getProdList();

    this.productservice.getProdList()
      .subscribe((response: any) => {
        this.products = response;
        this.filterCategory = response;
        this.products.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      });

    this.cartservice.search.subscribe((val: any) => {
      this.searchKey = val;
    })

    this.productservice.getCategory()
      .subscribe((response: any) => {
        this.categories = response;
      });

    this.productservice.getsubCategory()
      .subscribe((response: any) => {
        this.subcategories = response;
      });

    // this.productservice.getProductMainImages()
    //   .subscribe((response: any) => {
    //     this.mainImages = response;
    //   });
  }


  filter(category: string) {
    this.filterCategory = this.products
      .filter((a: any) => {
        if (a.catName == category || category == '') {
          return a;
        }
      })
  }

  filter2(category: string) {
    this.filterCategory = this.products
      .filter((a: any) => {
        if (a.subCatName == category || category == '') {
          return a;
        }
      })
  }

  viewdetails(productId:number){
    console.log(productId);
    this.router.navigate(['/productdetail'],{queryParams: {prodId:productId}});
  }


  addtocart(item: any) {
    this.cartservice.addtoCart(item);
  }
}


