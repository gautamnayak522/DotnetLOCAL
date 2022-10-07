import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  readonly APIUrl = environment.APIUrl;
  constructor(private http: HttpClient,private toastr: ToastrService) { }
  availabledata:any;
  token :any;
  httpOptions={};
  setoptions(){
    this.token = localStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`
      })
    }
  }

  GetAllOrders(): any {
    this.setoptions();
    return this.http.get<any>(this.APIUrl + '/Order', this.httpOptions);
  }

  GetorderStatuses() {
    return this.http.get<any>(this.APIUrl + '/Order/getstatuses');
  }

  getProdList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Product/GetProductMaster');
  }
  getCategory(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Category/CategorywithSubcategory');
  }
  getsubCategory(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Subcategory');
  }
  getbrands(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Brand');
  }
  getusers():Observable<any[]> {
    this.setoptions();
    return this.http.get<any>(this.APIUrl + '/User',this.httpOptions);
  }

  GetOrderbyOrderNo(orderNo:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + '/Order/GetOrderbyOrderNo?orderNo='+orderNo);
  }

  postcategory(data:any){
    console.log(data);
    this.setoptions();
    this.toastr.success("Category Added");
    return this.http.post<any>(this.APIUrl + '/Category',data,this.httpOptions);
  }
  putcategory(data:any){
    this.setoptions();
    this.toastr.success("Category Updated");
    return this.http.put<any>(this.APIUrl+'/Category?id='+data.catId,data,this.httpOptions);
  }

  postsubcategory(data:any){
    this.setoptions();
    this.toastr.success("SubCategory Added");
    return this.http.post<any>(this.APIUrl + '/Subcategory',data,this.httpOptions);
  }

  putsubcategory(data:any){
    this.setoptions();
    this.toastr.success("SubCategory Updated");
    return this.http.put<any>(this.APIUrl+'/Subcategory?id='+data.subcatId,data,this.httpOptions);
  }

  postbrand(data:any){
    this.setoptions();
    this.toastr.success("Brand Added");
    return this.http.post<any>(this.APIUrl + '/Brand',data,this.httpOptions);
  }

  putbrand(data:any){
    this.setoptions();
    this.toastr.success("Brand Updated");
    return this.http.put<any>(this.APIUrl+'/Brand?id='+data.brandId,data,this.httpOptions);
  }
  postproduct(data:any){
    this.setoptions();
    this.toastr.success("Product Added");
    return this.http.post<any>(this.APIUrl + '/Product',data,this.httpOptions);
  }
  putproduct(data:any){
    this.setoptions();
    this.toastr.success("Product Updated");
    return this.http.put<any>(this.APIUrl+'/Product?id='+data.productId,data,this.httpOptions);
  }
  deleteproduct(productid:any){
    this.setoptions();
    this.toastr.success("Product Deleted");
    return this.http.delete<any>(this.APIUrl + '/Product?id='+productid,this.httpOptions);
  }
  deletecategory(categoryid:any){
    this.setoptions();
    this.toastr.success("Category Deleted");
    return this.http.delete<any>(this.APIUrl + '/Category?id='+categoryid,this.httpOptions);
  }
  deletesubcategory(subcategoryid:any){
    this.setoptions();
    this.toastr.success("SubCategory Deleted");
    return this.http.delete<any>(this.APIUrl + '/Subcategory?id='+subcategoryid,this.httpOptions);
  }
  deletebrand(brandid:any){
    this.setoptions();
    this.toastr.success("Brand Deleted");
    return this.http.delete<any>(this.APIUrl + '/Brand?id='+brandid,this.httpOptions);
  }

  changequantity(productId:any,newQuantity:any){
    return this.http.get(this.APIUrl+'/productinventory/GetInventorybyProductID?productID='+productId) 
  }
  putquantity(prodInvId:any,data:any){
    this.setoptions();
    return this.http.put<any>(this.APIUrl + '/productinventory?id='+prodInvId,data,this.httpOptions);
  }
}
