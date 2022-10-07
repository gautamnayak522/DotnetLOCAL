import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent implements OnInit {

  name = new FormControl('')

  constructor() { 
    this.name.setValue("ABC");
  }

  ngOnInit(): void {
  }

}
