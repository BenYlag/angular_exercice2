import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {PostService} from './services/post.service';
import {RouterModule, Routes} from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
    {path: 'posts', component: PostListComponent},
    {path: 'new', component: NewPostComponent},
    {path: '', component: PostListComponent},
    {path: '**', redirectTo: 'posts'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
      FormsModule
  ],
  providers: [
      PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
