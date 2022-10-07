import { Component, OnInit } from '@angular/core';
import { StudentServiveService } from '../student-servive.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  data:any=[];
  constructor(private ss:StudentServiveService) { }

  ngOnInit(): void {
    this.data=this.ss.getlist();
  }

}
