import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  orderNo: any;
  ordermaster: any;
  public orderStatus: string = '';
  public counts = ["Placed", "Ready to pickup", "Dispatched", "Delivered"];


  constructor(private adminservice: AdminService, private actrouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.actrouter.queryParams
      .subscribe((params: any) => {

        console.log(params);

        this.orderNo = params.orderNo;

        this.adminservice.GetOrderbyOrderNo(this.orderNo).subscribe(
          (data: any) => {
            console.log(data)
            this.ordermaster = data;
            this.orderStatus = data.status;
          })
      })
  }

}
