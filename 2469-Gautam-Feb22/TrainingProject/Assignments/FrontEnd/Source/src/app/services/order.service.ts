import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly APIUrl = environment.APIUrl; 
  
 

  constructor(private http: HttpClient) {}

  makeOrder(data:any)
  {
    return  this.http.post(this.APIUrl + '/Order/OrderwithmasterDetails',data)
  }
  getmyorders(userId : any){
    return this.http.get(this.APIUrl+'/Order/GetOrdersofUser?userId='+userId)
  }

  changestatusoforder(orderId:any,statusId:any){
    let object={orderID:orderId,statusId:statusId}
    return this.http.put(this.APIUrl+'/Order',object)
  }

}
