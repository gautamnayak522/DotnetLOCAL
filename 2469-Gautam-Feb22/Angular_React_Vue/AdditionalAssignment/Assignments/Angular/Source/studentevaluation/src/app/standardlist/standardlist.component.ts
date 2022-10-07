import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standardlist',
  templateUrl: './standardlist.component.html',
  styleUrls: ['./standardlist.component.css']
})
export class StandardlistComponent implements OnInit {
  selected = '';

  stdlist: any[] = [
    {
      Standard: '1',
    },
    {
      Standard: '2',
    },
    {
      Standard: '3',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
