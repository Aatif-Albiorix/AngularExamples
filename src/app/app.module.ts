import { ErrorHandler } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ObservableComponent } from './ObservableExample/observable/observable.component';
import { PromiseComponent } from './ObservableExample/promise/promise.component';
import { ObservableService } from './ObservableExample/service/observable.service';
import { Child1Component } from './SubjectExample/child1/child1.component';
import { Child2Component } from './SubjectExample/child2/child2.component';
import { Child3Component } from './SubjectExample/child3/child3.component';
import { Child4Component } from './SubjectExample/child4/child4.component';
import { SharedService } from './SubjectExample/Service/shared.service';
import { BehaviorComponent } from './SubjectExample/behavior/behavior.component';
import { DemoComponent } from './InterceptorExample/demo/demo.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DemoInterceptor } from './services/demo.interceptor';
import { OperationComponent } from './ArrayOperationExample/operation/operation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomSnackBarComponent, ThemeComponent } from './Material-Demo/theme/theme.component';
import { MaterialModule } from './material/material.module';
import { DialogExampleComponent } from './Material-Demo/dialog-example/dialog-example.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    ContactFormComponent,
    CustomSnackBarComponent,
    NewCourseFormComponent,
    NewCourseFormComponentComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    PostsComponent,
    ObservableComponent,
    PromiseComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    BehaviorComponent,
    DemoComponent,
    OperationComponent,
    ThemeComponent,
    DialogExampleComponent
  ],
  entryComponents: [CustomSnackBarComponent, DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule
    ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler},
    ObservableService,
    SharedService,
    { provide: HTTP_INTERCEPTORS, useClass: DemoInterceptor, multi: true}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
