import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserroleService } from './userrole.service';

@Injectable({
  providedIn: 'root'
})
export class LogingaurdService {
  constructor(private authService: AuthService,private router: Router,private userroleservice:UserroleService) {}
  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
    
  }
