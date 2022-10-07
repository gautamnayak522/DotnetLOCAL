import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly APIUrl = environment.APIUrl; 
  
  // userdetails = new BehaviorSubject<any>(false);
  // detailsstatus = this.userdetails.asObservable();

  // changedetaisstatus(val: any) {
  //   this.userdetails.next(val)
  // }
  
  constructor(private http: HttpClient) { }

  
  GetUser(userId:any):Observable<any> {

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    return this.http.get<any>(this.APIUrl + '/User/' + userId, httpOptions);
  }

  GetLoginUserDetails(userId: any): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    return this.http.get<any>(this.APIUrl + '/User/getUserwithAddress/' + userId, httpOptions);
  }

  PutUserDetails(userId: any, user: any): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    return this.http.put<any>(this.APIUrl + '/User?id=' + userId, user, httpOptions);
  }

  PostUserAddress(useraddress:any){
    return this.http.post<any>(this.APIUrl + '/UserAddress',useraddress);
  }

  PutUserAddress(userId: any,useraddress:any){
    return this.http.put<any>(this.APIUrl + '/UserAddress?id='+userId,useraddress);
  }
}
