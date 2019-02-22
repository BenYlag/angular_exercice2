import { Component, OnInit, Input } from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  /*  @Input() title: string;
    @Input() content: string;
    @Input() loveIts: number;
    @Input() created_at: Date;
    @Input() index: number;
    */
  @Input() post: Post;

    constructor(private postService: PostService) { }

  ngOnInit() {
  }

  getColor() {
      if (this.post.loveIts > 0) {
        return 'green';
      } else if (this.post.loveIts < 0) {
        return 'red';
      }
  }

  addLove() {
      this.postService.addOneLove(this.post);
  }

  removeLove() {
      this.postService.removeOneLove(this.post);
  }

  deletePost() {
      this.postService.deleteOne(this.post);
  }

}
