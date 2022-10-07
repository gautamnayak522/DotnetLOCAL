import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  readonly APIUrl = environment.APIUrl; 
  
 

  constructor(private http: HttpClient) {}
  
}
