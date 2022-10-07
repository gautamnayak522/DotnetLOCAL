import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Posts } from './Models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsserviceService {
  hosturl="https://gorest.co.in/public/v2/";
  token = 'a73b7eea017b4090a3b23cd07029bf4abe747d81e401bd5ab25a0f2a6429a8a9'
  constructor(private http:HttpClient) { }

  getPosts(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`

      })
    }
    return this.http.get<Array<Posts>>(`${this.hosturl}posts`,httpOptions) 
     
  }

  postPost(postinfo:Posts)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`
      })
    }
    alert("New Entry Added")
   return this.http.post<Posts>(`${this.hosturl}posts`,postinfo,httpOptions)

  }

  putPost(postinfo:Posts,id:number)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:`Bearer ${this.token}`

      })
    }
    alert("Entry Updated for "+ id)
      return this.http.put<Posts>(`${this.hosturl}posts/${id}`,postinfo,httpOptions)

    }

    deletePost(postid:number){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization:`Bearer ${this.token}`
        })
      }
      return this.http.delete(`${this.hosturl}posts/${postid}`,httpOptions)
    }
}
