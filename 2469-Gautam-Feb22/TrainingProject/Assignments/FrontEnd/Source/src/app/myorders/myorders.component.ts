import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  public myorders: any = [];
  p: number = 1;
  ordermaster:any;

  constructor(public orderservice: OrderService, public adminservice: AdminService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.orderservice.getmyorders(localStorage.getItem('userId'))
      .subscribe((res: any) => {
        this.myorders = res;
        console.log(this.myorders);
      })
  }

  cancelorder(orderId:any){
    if(window.confirm('Are sure you want to Cancel this Order ?')){
      let statusId = 5;
      this.orderservice.changestatusoforder(orderId, statusId).subscribe(
      (data: any) => {
        console.log(data);
      });
      window.location.reload();
      this.toastr.error("Order Cancelled");
     }
  }

  viewDetails(item:any) {
    this.router.navigate(['/orderdetail'],{queryParams: {orderNo:item}});
  }


}
