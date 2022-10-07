import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userDetails: Array<any> = [
    { "userID": 1, "userName": "Roy", Gender: "Male", "designation": "Developer", "PanNumber": "335454" },
    { "userID": 2, "userName": "Rohit", Gender: "Male", "designation": "Junior Developer", "PanNumber": "abcd" }
  ];

  id:number=0;
  finallist:Array<any>=[];


  constructor(private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe(p=>{
      this.id=p["userID"];
      this.finallist= this.userDetails.filter(p=>p.userID==this.id);
     });
    }

}
