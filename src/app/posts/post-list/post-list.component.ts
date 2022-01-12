import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Post } from 'src/app/models/posts.model';
import { getPosts } from '../state/posts.selector';
import { deletePost } from '../state/posts.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
   posts !: Observable<Post[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

  onDeletePost(id: string) {
    if(confirm('Are you sure you want to delete ?'))
    this.store.dispatch((deletePost({ id })))
  }

}
