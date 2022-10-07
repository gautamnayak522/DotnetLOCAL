import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';
import { CartService } from './cart.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly APIUrl = environment.APIUrl;
  token: any = null;


  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private userservice: UserService, public cartservice: CartService, private router: Router,private toastr: ToastrService) { }

  login(user: string, password: string): any {
    let post = { mobile_or_email: user, password: password };
    return this.http.post(this.APIUrl + '/Login', post)

  }

  loginwithotp(user: string): any {
    let post = { mobile_no: user };
    return this.http.post(this.APIUrl + '/LoginOtp/SendOTP', post)
  }

  VerifyOtp(user: any, OTP: string): any {
    let post = { mobileno: user, otp: OTP };
    this.toastr.success("Login successfully");
    return this.http.post(this.APIUrl + '/LoginOtp/VerifyOTP', post)
  }
  Signupwithotp(mobileno: any) {
    let post = { mobile_no: mobileno };
    return this.http.post(this.APIUrl + '/signupwithOTP', post)
  }
  logout(): any {
    localStorage.clear();
    //this.userservice.changedetaisstatus(false);
    this.cartservice.removeAllCart();
    this.router.navigate(['/']);
    this.toastr.success("Logout successfully");
  }
  getUser(): any {
    const token = localStorage.getItem('token');
    // if(localStorage.getItem('username') && this.jwtHelper.isTokenExpired(JSON.parse(localStorage.getItem('token')!)) )
    // if(localStorage.getItem('username') && localStorage.getItem('token'))
    if (token && !this.jwtHelper.isTokenExpired(token))
      return true;
    else
      return false;
  }

  isLoggedIn(): boolean {
    return this.getUser();
  }

}