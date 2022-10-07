import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  selected:number=0;

  constructor(private router: ActivatedRoute) { }


  ngOnInit(): void {

    this.router.params.subscribe(p=>{
      this.selected=p["id"];
      console.log(this.selected);
     });
}

}