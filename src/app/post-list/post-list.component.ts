import { Component, OnInit, Input } from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs/index';
import {Post} from "../models/post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    posts: any[];
    postsSubscription: Subscription;

  constructor(private postService: PostService) { }


    ngOnInit() {
        this.postsSubscription = this.postService.postsSubject.subscribe(
            (posts: any[]) => {
                this.posts = posts;
            }
        );
        this.postService.emitPostSubject();
    }

    ngOnDestroy() {
      this.postsSubscription.unsubscribe();
    }

}
