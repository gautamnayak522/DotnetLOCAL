import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor() { }
  log(msg:string)
  {
    console.log(msg);
    
  }
}
