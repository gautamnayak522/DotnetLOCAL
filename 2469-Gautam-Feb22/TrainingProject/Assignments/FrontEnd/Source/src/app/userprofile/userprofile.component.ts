import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';
import { UserService } from '../services/user.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  loginUser: any;
  updateduser: any;
  updateuseraddress : any;
  fororder : any;
  
  
  profileform = this.formbuilder.group({
    userId: [localStorage.getItem('userId')],
    mobileNo: [' ', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
    emailAddress: ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password:['',Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)],
    userAddresses: this.formbuilder.group({
      addressline1: ['', Validators.required],
      addressline2: ['', Validators.required],
      landMark: ['', Validators.required],
      city: ['', Validators.required],
      pin: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9 ]*'),
        ]),
      ],

      // stateId:['', Validators.required]
    })
  })

  constructor(private formbuilder: FormBuilder, public authservice: AuthService,private toastr: ToastrService, public sharedservice: SharedService, public userservice: UserService,private router : Router,private actrouter : ActivatedRoute) { }

  onSubmit() {
    this.userservice.GetUser(localStorage.getItem('userId'))
      .subscribe((arg: any) => {
        this.updateduser = arg;
        

        this.updateduser.userId = localStorage.getItem('userId');
        this.updateduser.mobileNo = this.profileform.controls['mobileNo'].value;
        this.updateduser.emailAddress = this.profileform.controls['emailAddress'].value;
        this.updateduser.firstName = this.profileform.controls['firstName'].value;
        this.updateduser.lastName = this.profileform.controls['lastName'].value;

        if(this.profileform.controls['password'].value!="")
        {
          this.updateduser.password = this.profileform.controls['password'].value;
        }

        this.userservice.PutUserDetails(localStorage.getItem('userId'), this.updateduser).subscribe((arg: any) => {
          this.toastr.success("Profile Updated successfully");
        });

        if(this.fororder){
          this.router.navigate(['/order']);
        }
       
      });

      if(this.loginUser.userAddresses[0]!=null){
        

        const putaddressstring = {
          userAddId:this.loginUser.userAddresses[0].userAddId,
          userId: localStorage.getItem('userId'),
          addressline1: this.addressses.controls['addressline1'].value,
          addressline2: this.addressses.controls['addressline2'].value,
          landMark:this.addressses.controls['landMark'].value,
          city:this.addressses.controls['city'].value,
          pin:this.addressses.controls['pin'].value
        }
        this.userservice.PutUserAddress(putaddressstring.userAddId,putaddressstring).subscribe((arg: any) => {
          // alert('User Address Puted');
        });
      }
      else{
        const postaddressstring = {
          userId: localStorage.getItem('userId'),
          addressline1: this.addressses.controls['addressline1'].value,
          addressline2: this.addressses.controls['addressline2'].value,
          landMark:this.addressses.controls['landMark'].value,
          city:this.addressses.controls['city'].value,
          pin:this.addressses.controls['pin'].value
          }  

          this.userservice.PostUserAddress(postaddressstring).subscribe((arg: any) => {
            // alert('User Address Posted');
          });
        }
      }


  get addressses() {
    return this.profileform.controls['userAddresses'] as FormGroup;
  }

  ngOnInit(): void {
    
   
    this.actrouter.queryParams
      .subscribe((params:any) => {
        console.log(params); 
        this.fororder = params.cartorder;
      }
    );

    this.userservice.GetLoginUserDetails(localStorage.getItem('userId'))
      .subscribe((arg: any) => {
        this.loginUser = arg;
        console.warn(arg);

        this.profileform.controls['mobileNo'].setValue(this.loginUser.mobileNo);
        this.profileform.controls['emailAddress'].setValue(this.loginUser.emailAddress);
        this.profileform.controls['firstName'].setValue(this.loginUser.firstName);
        this.profileform.controls['lastName'].setValue(this.loginUser.lastName);
        this.addressses.controls['addressline1'].setValue(this.loginUser.userAddresses[0]?.addressline1);
        this.addressses.controls['addressline2'].setValue(this.loginUser.userAddresses[0]?.addressline2);
        this.addressses.controls['landMark'].setValue(this.loginUser.userAddresses[0]?.landMark);
        this.addressses.controls['city'].setValue(this.loginUser.userAddresses[0]?.city);
        this.addressses.controls['pin'].setValue(this.loginUser.userAddresses[0]?.pin);
        //  this.addressses.controls['stateId'].setValue(this.loginUser.userAddresses[0]?.stateId);
        
        
      });
  }

  get getmobileNo() {
    return this.profileform.get('mobileNo');
  }
  get getemailAddress() {
    return this.profileform.get('emailAddress');
  }
  get getfirstName() {
    return this.profileform.get('firstName');
  }
  get getlastName() {
    return this.addressses.get('lastname');
  }
  get getaddressline1() {
    return this.addressses.get('addressline1');
  }
  get getaddressline2() {
    return this.addressses.get('addressline2');
  }
  get getpassword() {
    return this.profileform.get('password');
  }


  get getlandMark() {
    return this.addressses.get('landMark');
  }
  get getcity() {
    return this.addressses.get('city');
  }
  get getpin() {
    return this.addressses.get('pin');
  }

}
