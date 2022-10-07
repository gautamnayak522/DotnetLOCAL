import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname = "";
  pass = "";
  check() {
    if (this.uname == "" || this.pass == ""){
      alert("Username and Password Should not be Blank");
    }
    else if (this.uname == "admin" && this.pass == "admin") {
      alert("Valid User");
      this.uname = "";
      this.pass = "";
    }
    else {
      alert("Invalid User");
      this.uname = "";
      this.pass = "";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
