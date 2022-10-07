import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';
import { SpinnerVisibilityService } from 'ng-http-loader';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  public listfororder: any = [];
  public orderStatus: string = '';
  public orderdetails: any;

  public counts = ["Placed", "Ready to pickup", "Delivery in Progress", "Delivered"];
  //public orderStatus = "In Progress"

  constructor(private cartService: CartService, public orderservice: OrderService, public userservice: UserService, private router: Router, private spinner: SpinnerVisibilityService) {
  }

  ngOnInit(): void {
    
    this.cartService.getProducts()
      .subscribe((res: any) => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })

    this.generateorderstring();

  }

  generateorderstring() {

    this.listfororder = {
      orderNo: " ",
      userId: localStorage.getItem('userId'),
      orderstatusId: 1,
      deleveryAddressId: 1,
      totalAmount: this.grandTotal,

      orderitems: this.products.map((p: any) =>
        ({
          productId: p.productId,
          qty: p.quantity
        })
      )
    }

    if (this.listfororder.totalAmount != 0) {
     
      this.orderservice.makeOrder(this.listfororder).subscribe(
        (data: any) => {

          console.log(data);
          this.orderdetails = data;
          this.orderStatus = 'Placed';
          this.cartService.removeAllCart();
        });
    }
    else {
      this.router.navigate(['/']);
    }

  }

}
