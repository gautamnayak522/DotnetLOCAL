import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public itemfound = false;

  constructor(private toastr: ToastrService) { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  
  addtoCart(product : any){

    this.cartItemList.map((a:any, index:any)=>{
      if(a.productId===product.productId){
        // this.cartItemList.splice(index,1);
        // product.quantity = product.quantity+1;
        //alert("item already available in Cart")
        a.quantity = a.quantity+1;
        this.itemfound = true;
        this.toastr.success("Item Already Available In Cart");
      }
    });

    if(!this.itemfound){
    this.cartItemList.push(product);
    this.toastr.success("Item Added to Cart");
    }
    this.itemfound = false;
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
    
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price*a.quantity;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(a.productId===product.productId){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  addquantity(product:any){
    product.quantity = product.quantity+1;
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  minusquantity(product:any){
    if(product.quantity<=1){
      this.removeCartItem(product);
    }
    else{
      product.quantity = product.quantity-1;
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
}
