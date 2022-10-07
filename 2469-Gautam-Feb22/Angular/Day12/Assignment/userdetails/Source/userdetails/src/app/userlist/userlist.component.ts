import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  selected="";
  userlist:Array<any>=[{"userID":1,"userName":"Roy"},{"userID":2,"userName":"Rohit"}]

  constructor() { }

  ngOnInit(): void {
  }

}
