import { Component, OnInit } from '@angular/core';
import { detectOverflow } from '@popperjs/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginwithotp',
  templateUrl: './loginwithotp.component.html',
  styleUrls: ['./loginwithotp.component.css']
})
export class LoginwithotpComponent implements OnInit {

  constructor(private modalService: NgbModal,public authservice : AuthService,private router : Router) { }

  token:any;
  userId:any;
  Otp = '';

  VerifyOtp(){
    if(this.Otp){
      this.authservice.VerifyOtp(localStorage.getItem('username')!,this.Otp).subscribe(
        (data: any) => {
            this.token = data.token;
            this.userId = data.userId;
            console.log(this.token); 
            if(data.message){
              alert(data.message);
            }
            else{
              //localStorage.setItem('username', this.loginform.value.username!);
              localStorage.setItem('userId', this.userId);
              localStorage.setItem('token', this.token);
              // return true;
            }
            this.modalService.dismissAll();
            this.router.navigate(['/']);
        });
    }
  }

  cancelOtp(){
    this.modalService.dismissAll();
    localStorage.clear();
    
  }
  ngOnInit(): void {
  }

}
