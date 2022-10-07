import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'EmpData';
  values:any[]=[];
  
  

  onClickSubmit(data:any) {

    console.log(data.doj);
    this.values.push(data);
     console.log(this.values); 
    this.values.sort((a, b) => (a.ename < b.ename ? -1 : 1));  

    
 }
 checkdate(object:any){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; 
    var empmonth=object.doj.slice(6,7);

    if(month==empmonth){
      return true;
    }
    else{
      return false;
    }
 }
}
