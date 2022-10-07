import { Component, OnInit } from '@angular/core';
import { Posts } from './Models/Posts';
import { PostsserviceService } from './postsservice.service';
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpposts';
  postDetails: FormGroup;
  post!: Posts;

  Posts: Array<Posts> = [];
  constructor(private postservice: PostsserviceService,private fb: FormBuilder) { 
    this.postDetails=this.fb.group({
      id:[''],
      user_id:[''],
      title:[''],
      body:['']
    })
  }

  postPost() {
    console.log(this.postDetails.value);
    this.post = this.postDetails.value;
    this.postservice.postPost(this.post).subscribe((arg: Posts) => {
      this.post = arg
      console.log(this.post);
    });
  }

  updateinfo()
  {
    this.post = this.postDetails.value;
    this.postservice.putPost(this.post,this.post.id).subscribe((arg: Posts) => {
       this.post = arg
      console.log(this.post);

    });
  }
  editinfo(post:Posts)
  {
    this.postDetails.setValue(post);
  }

  deletepost(post:Posts)
  {
    this.postservice.deletePost(post.id).subscribe(() => {
      alert('Deleted Succesfully')
    });
  };
  
  ngOnInit(): void {
    this.postservice.getPosts().subscribe((p: Array<Posts>) => {
      this.Posts = p;
    })
  }

}
