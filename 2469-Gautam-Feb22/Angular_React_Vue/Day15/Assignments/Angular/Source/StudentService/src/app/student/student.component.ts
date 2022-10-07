import { Component, OnInit } from '@angular/core';
import { StudentServiveService } from '../student-servive.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 
  Id='';
  Name='';
  Address='';
  selected='';
  updateName='';
  data:any=[];
  constructor(private ss:StudentServiveService) { }
  SubmitData(){
    let obj = {Id:this.Id,Name:this.Name,Address:this.Address}
    this.ss.addStudent(obj);
    this.Id='';this.Name='';this.Address='';
  }
  DeleteStudent(){
    this.ss.removeStudent(this.selected);
    this.selected='';
  }
  updateDetails(obj:any){
    alert("Details Updated");
    this.ss.updateStudent(obj);
  }

  ngOnInit(): void {
    this.data=this.ss.getlist();
  }

}
