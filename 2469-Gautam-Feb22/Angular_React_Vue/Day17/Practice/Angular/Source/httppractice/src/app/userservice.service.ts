import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './Models/Users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  hosturl="https://gorest.co.in/public/v2/";
  token="a73b7eea017b4090a3b23cd07029bf4abe747d81e401bd5ab25a0f2a6429a8a9";
  constructor(private http:HttpClient) { 
  }
  getUsers():Observable<Array<User>> 
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`

      })
    }
  var call= this.http.get<Array<User>>(`${this.hosturl}users`,httpOptions) 
  return call;
   }
}
