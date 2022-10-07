import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-postlike',
  templateUrl: './postlike.component.html',
  styleUrls: ['./postlike.component.css']
})
export class PostlikeComponent implements OnInit {
  @Output() getvalue= new EventEmitter<any>();
  title:String="Radix";
  desc="Radixweb is a globally acclaimed IT consulting and offshore software development leader.";
  date=new Date().toLocaleDateString();
  likeon="";
  likelist:Array<string>=[];
  constructor() { }

  ngOnInit(): void {
  }
  display(){
    this.likeon=new Date().toLocaleString();
    let datas:any={title:this.title,date:this.date,likeon:this.likeon}
    console.log(datas);
    this.likelist.push(datas);
    console.log(this.likelist);
    this.getvalue.emit(this.likelist);
  }

}
