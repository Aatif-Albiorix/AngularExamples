import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './InterceptorExample/demo/demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
      { path: 'profile/:username', component: GithubProfileComponent},
      { path: 'followers', component: GithubFollowersComponent},
      // { path: 'posts', component: PostsComponent},
      {path: 'counter' , component: CounterComponent},
      {path: 'demo' , component: DemoComponent},
      {path: 'posts' , component: PostListComponent, children: [
        { path: 'add', component: AddPostComponent}
      ]},
      { path: '**', component: NotFoundComponent},
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
