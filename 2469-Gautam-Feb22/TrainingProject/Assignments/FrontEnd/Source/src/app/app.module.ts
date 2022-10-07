import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedService } from './services/shared.service';
import { CartService } from './services/cart.service';

import { OrderComponent } from './order/order.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginwithotpComponent } from './login/loginwithotp/loginwithotp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {  JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrderdetailsComponent } from './admin/orderdetails/orderdetails.component';
import { ViewdetailsComponent } from './admin/viewdetails/viewdetails.component';
import { UsersComponent } from './admin/users/users.component';
import { ManageproductsComponent } from './admin/manageproducts/manageproducts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export function tokkenGetter() {
  return localStorage.getItem('token');
}
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { OrderdetailComponent } from './myorders/orderdetail/orderdetail.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    LoginwithotpComponent,
    UserprofileComponent,
    HomeComponent,
    AdminComponent,
    MyordersComponent,
    OrderdetailsComponent,
    ViewdetailsComponent,
    UsersComponent,
    ManageproductsComponent,
    ProductDetailComponent,
    OrderdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgbModule,
    NgxImageZoomModule,
    NgxPaginationModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right', timeOut:2000}),
    

    JwtModule.forRoot({
      config: {
        tokenGetter: tokkenGetter,
        allowedDomains: ["http://localhost:4200"],
        disallowedRoutes: []
      }
    }),

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [SharedService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
