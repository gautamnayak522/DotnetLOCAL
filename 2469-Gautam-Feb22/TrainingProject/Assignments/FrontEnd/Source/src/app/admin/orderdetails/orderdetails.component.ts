import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  // @Input() order:any;
  public orders: any = [];
  public statuses: any = [];
  selectedstatus: any;
  currentorder: any;
  editmode = false;
  myid: any;
  p: number = 1;
  searchKey = "";
  ordermaster : any;
  constructor(public adminservice: AdminService, private modalService: NgbModal, private orderservice: OrderService,private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {

    this.adminservice.GetAllOrders().subscribe(
      (data: any) => {
        console.log(data);
        this.orders = data;
      });

    this.adminservice.GetorderStatuses().subscribe(
      (data: any) => {
        this.statuses = data;
        console.log(data);
      });
  }

  changestatus(itemId: any) {
    console.log(itemId);
    console.log(this.selectedstatus);
  }

  viewDetails(item:any) {
    this.currentorder = item;
    this.router.navigate(['admin/viewdetail'],{queryParams: {orderNo:item}});
    // this.adminservice.GetOrderbyOrderNo(item).subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.ordermaster = data;
    //   });
  }

  changestatusbutton(ordeId: any, orderstatusid: any) {
    this.myid = ordeId
    this.orders.forEach((element: any) => {
      if (element.orderId == ordeId) {
        this.selectedstatus = orderstatusid;
        element.editmode = true;
      }
      else {
        element.editmode = false;
      }
    });
  }

  savestatus(item: any, statusId: any) {
    console.log("OrderId :" + item.orderId);
    console.log("statusId : " + statusId);
    this.toastr.success("Order Status changed");

    this.orderservice.changestatusoforder(item.orderId, statusId).subscribe(
      (data: any) => {
        console.log(data);

      });
    this.editmode = false;
    window.location.reload();
  }
  
  cancel() {
    this.editmode = false;
    window.location.reload();
  }

}
