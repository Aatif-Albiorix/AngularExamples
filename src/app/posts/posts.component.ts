import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] | undefined;
  constructor(private service: PostService) { }

   ngOnInit() {
    this.service.getAll()
      .subscribe(
        (posts: any[] | undefined) => this.posts = posts);
   }

  //  *** Create Data ***

   createPost(input: HTMLInputElement) {
    let post: any = {title: input.value}
    this.posts?.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
        post.id = newPost.id;
      },
      (error: AppError) => {
        this.posts?.splice(0, 1)
        
        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        }
        else throw error;
      })
   }

  //  *** Update Data ***

   updatePost(post: any) {
    // this.http.post(this.url, JSON.stringify(post)) 
    this.service.update(post)
      .subscribe(
        updatedPost => {
        console.log(updatedPost)
      })
  }

  // *** Delete Data ***

  deletePost(post: any) {
    let index: any = this.posts?.indexOf(post);
        this.posts?.splice(index, 1);
    
    this.service.delete(post.id)
      .subscribe(
        null, 
      (error: AppError) => {
        this.posts?.splice(index, 0, post)
        if(error instanceof NotFoundError)
          alert('This post is already deleted');
        else throw error;
      })
  }

}











// import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';

// @Component({
//   selector: 'posts',
//   templateUrl: './posts.component.html',
//   styleUrls: ['./posts.component.css']
// })
// export class PostsComponent implements OnInit
//  {

//   posts: any[] | undefined;
//   private url = 'https://jsonplaceholder.typicode.com/posts';

//   constructor(private http: Http) { }

//    ngOnInit() {
//     this.http.get(this.url)
//       .subscribe(response => {
//         this.posts = response.json();
//       })
//    }

//   //  *** Create Data ***

//    createPost(input: HTMLInputElement) {
//     let post: any = {title: input.value}
//     input.value = '';

//     this.http.post(this.url, JSON.stringify(post))
//     .subscribe(response => {
//       post.id = response.json().id;
//       this.posts?.splice(0, 0, post);
//     })
//    }

//   //  *** Update Data ***

//    updatePost(post: any) {
//     // this.http.post(this.url, JSON.stringify(post)) 
//     this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
//       .subscribe(response => {
//         console.log(response.json())
//       })
//   }

//   // *** Delete Data ***

//   deletePost(post: any) {
//     this.http.delete(this.url + '/' + post.id)
//       .subscribe(response => {
//         let index: any = this.posts?.indexOf(post);
//         this.posts?.splice(index, 1);
//       })
//   }

// }
