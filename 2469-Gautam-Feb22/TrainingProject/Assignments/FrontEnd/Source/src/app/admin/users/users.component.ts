import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any=[];
  constructor(private adminservice: AdminService,private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.adminservice.getusers()
      .subscribe((response: any) => {
        this.users = response;
        console.log(this.users);
        
      });
  }

}
