import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinguardService {

  constructor(private authService: AuthServiceService) { }
  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }
}
