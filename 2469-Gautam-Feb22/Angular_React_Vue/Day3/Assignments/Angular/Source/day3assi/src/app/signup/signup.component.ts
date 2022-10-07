import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name="";
  add="";
  pan="";
  constructor() { }

  ngOnInit(): void {
  }

}
