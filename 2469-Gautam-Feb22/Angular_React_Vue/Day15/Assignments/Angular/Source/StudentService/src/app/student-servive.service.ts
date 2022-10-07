import { Injectable } from '@angular/core';
import { LogServiceService } from './log-service.service';

@Injectable({
  providedIn: 'root'
})
export class StudentServiveService {

  studentArray=[{Id:1,Name:"GAUTAM",Address:"Porbandar"},{Id:2,Name:"YASH",Address:"Junagadh"}]
  constructor(private logservice: LogServiceService) { }
  getlist(){
    this.logservice.log("Getting user data")
    return this.studentArray;
  }
  addStudent(obj:any){
    this.logservice.log("Add user data : "+ JSON.stringify(obj));
    this.studentArray.push(obj);
  }
  updateStudent(obj:any){
    this.logservice.log("Updated student data : "+ JSON.stringify(obj));
  }
  removeStudent(Name:any){
    this.logservice.log("Delete data of " + Name)
    const findIndex = this.studentArray.findIndex(a => a.Name === Name)
    findIndex !== -1 && this.studentArray.splice(findIndex , 1)
  }
}
