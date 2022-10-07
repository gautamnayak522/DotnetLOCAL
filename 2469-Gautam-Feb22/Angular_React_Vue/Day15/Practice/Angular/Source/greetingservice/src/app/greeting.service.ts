import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  greetings(user:any){
    return `Greetings of the day ${user}`;
  }
  constructor() { }
}
