import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  //public listfororder: any = [];

  constructor(private authservice:AuthService,private cartService: CartService,public orderservice : OrderService,public userservice : UserService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe((res: any) => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.toastr.success("All items are Removed");
    this.cartService.removeAllCart();
  }
  addquantity(item: any) {
    this.cartService.addquantity(item);
  }

  minusquantity(item: any) {
    this.cartService.minusquantity(item);
  }
  makeorder(){
        this.router.navigate(['/userprofile'],{queryParams: {cartorder:true}});
        if(!this.authservice.isLoggedIn()){
          this.toastr.error("Please Login First");
        }
    }

    viewdetails(productId:number){
      this.router.navigate(['/productdetail'],{queryParams: {prodId:productId}});
    }
  }




