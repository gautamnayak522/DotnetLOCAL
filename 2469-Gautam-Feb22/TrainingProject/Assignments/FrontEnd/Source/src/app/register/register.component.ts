import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginwithotpComponent } from '../login/loginwithotp/loginwithotp.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  
  isLoggedIn = false;

  registrationform = this.formbuilder.group({
    mobileno:['',Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[6-9]{1}[0-9]{9}$")])],
  })

  token: any;
  message:any;

  constructor(public authservice : AuthService,private modalService: NgbModal,private formbuilder: FormBuilder) { }



  Signupwithotp(){
    if(this.registrationform.valid)
    {

      this.authservice.Signupwithotp(this.registrationform.value.mobileno!).subscribe(
        (data: any) => {
            this.message = data.token;
            console.log(this.message); 
            if(data.message=='Already Registered'){
              alert(data.message + ": Please Login");
            }
            else{
              localStorage.setItem('username', this.registrationform.value.mobileno!);
              //localStorage.setItem('token', this.token);
              // return true;
              this.modalService.open(LoginwithotpComponent, { centered: true });
            }
        });
    }
    else{
      this.registrationform.markAllAsTouched();
    }
  }
  logout() {
    this.authservice.logout();
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.registrationform.value);
    
  }
  get getmobileno() {
    return this.registrationform.get('mobileno');
  }

  }

