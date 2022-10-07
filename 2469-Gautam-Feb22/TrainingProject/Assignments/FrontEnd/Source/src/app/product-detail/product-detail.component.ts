import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productID: any;
  productdetailslist: any = [];
  productdetail: any;
  myThumbnail = "";
  myFullresImage = "";
  constructor(private router: Router, private actrouter: ActivatedRoute, private productservice: SharedService,private cartservice:CartService) { }

  ngOnInit(): void {

    this.actrouter.queryParams
      .subscribe((params: any) => {

        this.productID = params.prodId;
        console.log(this.productID);

        this.productservice.getProdList()
          .subscribe((response: any) => {
            this.productdetailslist = response;
            
            console.log(this.productdetailslist);

            this.productdetailslist.forEach((a: any) => {
              if (a.productId == this.productID) {
                Object.assign(a, { quantity: 1, total: a.price });
                this.productdetail = a;
                console.log(this.productdetail);
                this.myThumbnail = this.productdetail.productImages[0];
                this.myFullresImage = this.productdetail.productImages[0];
              }
            });
          });
      }
      );
    }

    addtocart() {
      this.cartservice.addtoCart(this.productdetail);
    }
    makeorder(){
      this.cartservice.addtoCart(this.productdetail);
      this.router.navigate(['/userprofile'],{queryParams: {cartorder:true}});
  }
  setimage(item:any)
  {
    console.log(item);
    this.myThumbnail = item;
    this.myFullresImage=item;
  }

}
