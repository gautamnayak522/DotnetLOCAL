import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { LogingaurdService } from './services/logingaurd.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserroleService } from './services/userrole.service';
import { MyordersComponent } from './myorders/myorders.component';
import { OrderdetailsComponent } from './admin/orderdetails/orderdetails.component';
import { ManageproductsComponent } from './admin/manageproducts/manageproducts.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderdetailComponent } from './myorders/orderdetail/orderdetail.component';
import { ViewdetailsComponent } from './admin/viewdetails/viewdetails.component';

const routes: Routes = [
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  {path:'',component:ProductComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'productdetail', component: ProductDetailComponent},
  {path:'order', component: OrderComponent,canActivate: [LogingaurdService]},
  {path:'userprofile', component: UserprofileComponent,canActivate: [LogingaurdService]},
  {path:'myorder', component: MyordersComponent,canActivate: [LogingaurdService]},
  {path: 'orderdetail', component: OrderdetailComponent },
  {path:'admin', component: AdminComponent,canActivate: [LogingaurdService,UserroleService],
    children:[
      { path: '', redirectTo: 'orderdetails', pathMatch: 'full' },
      { path: 'orderdetails', component: OrderdetailsComponent },
      { path: 'viewdetail', component: ViewdetailsComponent },
      { path: 'manageproducts', component: ManageproductsComponent },
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
