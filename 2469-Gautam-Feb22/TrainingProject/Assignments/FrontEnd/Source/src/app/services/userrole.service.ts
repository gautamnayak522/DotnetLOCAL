import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserroleService {
  constructor(private authService: AuthService,private router: Router) {}
  isAdmin = false;
  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const role = JSON.parse(atob(token!.split('.')[1]))['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    // if(localStorage.getItem('username') && this.jwtHelper.isTokenExpired(JSON.parse(localStorage.getItem('token')!)) )
    // if(localStorage.getItem('username') && localStorage.getItem('token'))
    if(token && role!="Admin"){
      this.router.navigate(['/']);
      this.isAdmin = false;
      return false;
    }
    this.isAdmin = true;
    return true;
  }    
}

 