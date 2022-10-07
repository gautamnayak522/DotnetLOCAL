import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-india-usa',
  templateUrl: './india-usa.component.html',
  styleUrls: ['./india-usa.component.css']
})
export class IndiaUSAComponent implements OnInit {

  AtlanticMenu= [
    {"id":1, "item" : 'Kosher Meal'},
    {"id":2, "item": 'Moslem Meal'},
    {"id":3, "item": 'Vegetarian Meal'},
    {"id":4, "item": 'Asian Meal'}
  ];
  PacificMenu= [
    {"id":1, "item": 'SeaFood Meal'},
    {"id":2, "item": 'Lacto Ovo Veg Meal'},
    {"id":3, "item": 'Bland Meal'},
    {"id":4, "item": 'Fruit Meal'}
  ];
  
  atlanticMenu(id:any) {
    this.route.navigate(['atlantic', id], { relativeTo: this.router});
  }

  pacificMenu(id:any){
    this.route.navigate(['pacific', id], { relativeTo: this.router});
  }


  constructor(private router: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }

  viaAtlantic() {
    this.route.navigate(['atlantic'], { relativeTo: this.router });
  }

  viaPacific() {
    this.route.navigate(['pacific'], { relativeTo: this.router });
  }

}
