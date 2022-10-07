import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'greetingservice';
  user='';
  greetings = '';
  uname='';
  password='';

  constructor(private gt:GreetingService,public authServive:AuthServiceService){ 
  }

  login(){
    this.authServive.login(this.uname,this.password)
  }
  logout(){
    this.authServive.logout();
  }
  
  sendName(){
    this.greetings=this.gt.greetings(this.user)
  }
}
