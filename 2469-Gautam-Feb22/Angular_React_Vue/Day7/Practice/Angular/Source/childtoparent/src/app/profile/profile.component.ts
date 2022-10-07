import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  name="";
  @Output() getvalue = new EventEmitter();

  submitInfo(){
    this.getvalue.emit(this.name);
  }
}
