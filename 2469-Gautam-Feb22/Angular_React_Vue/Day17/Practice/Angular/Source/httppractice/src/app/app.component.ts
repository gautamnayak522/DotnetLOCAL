import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './Models/Users';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httppractice';
  userprofile: FormGroup;
  user!: User;
  users: Array<User> = [];
  constructor(private userservice: UserserviceService, private fb: FormBuilder) {
    this.userprofile = this.fb.group({
      id:[0],
      name: [""],
      email: [""],
      gender: [""],
      status: [""]
    })


  }
  ngOnInit(): void {
    this.userservice.getUsers().subscribe((p: Array<User>) => {
      this.users = p;
    })
  }
}
