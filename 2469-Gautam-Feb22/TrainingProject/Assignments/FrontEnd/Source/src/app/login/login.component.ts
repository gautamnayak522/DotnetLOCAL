import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginwithotpComponent } from './loginwithotp/loginwithotp.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;

  loginform = this.formbuilder.group({
    username:['',Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
    password: [''],
  })


  // roles: string[] = [];
  token: any;
  message:any;
  isAdmin=false;
  userId:any;

  constructor(public authservice : AuthService,private modalService: NgbModal,private formbuilder: FormBuilder,private router:Router,private toastr: ToastrService) { }

  login() {
    if(this.loginform.valid){
      this.authservice.login(this.loginform.value.username!,this.loginform.value.password!).subscribe(
        (data: any) => {
            this.token = data.token;
            this.userId = data.userId;
            console.log(this.token); 
            if(data.message){
              this.toastr.error(data.message);
            }
            else{
              localStorage.setItem('userId', this.userId);
              localStorage.setItem('username', this.loginform.value.username!);
              localStorage.setItem('token', this.token);
              // return true;

              this.router.navigate(['/admin']);
              this.toastr.success("Login successfully");
            }
      });
      
    }
    else{
      this.loginform.markAllAsTouched();
    }
  }

  loginwithotp(){
    if(this.loginform.valid)
    {

      this.authservice.loginwithotp(this.loginform.value.username!).subscribe(
        (data: any) => {
            this.message = data.token;
            console.log(this.message); 
            if(data.message=='NOT REGISTERED'){
              this.toastr.error("Please Signup First");
            }
            else{
              localStorage.setItem('username', this.loginform.value.username!);
              this.modalService.open(LoginwithotpComponent, { centered: true });
            }
        });
      
    }
    else{
      this.loginform.markAllAsTouched();
    }
  }
  logout() {
    this.authservice.logout();
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }
  get getusername() {
    return this.loginform.get('username');
  }

}
