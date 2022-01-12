import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './InterceptorExample/demo/demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
      { path: 'profile/:username', component: GithubProfileComponent},
      { path: 'followers', component: GithubFollowersComponent},
      // { path: 'posts', component: PostsComponent},
      {path: 'counter' , loadChildren: () => import ('./counter/counter.module').then((m) => m.CounterModule)},
      {path: 'demo' , component: DemoComponent},
      {path: 'posts' , loadChildren: () => import('./posts/posts.module').then((m) => m.PostModule)},
      {
        path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      },
      { path: '**', component: NotFoundComponent},
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
