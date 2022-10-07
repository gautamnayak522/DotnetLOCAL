import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { OrderComponent } from '../order/order.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    
}
}


