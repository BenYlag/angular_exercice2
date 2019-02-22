import {Subject} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {Post} from '../models/post.model';

@Injectable()
export class PostService {


    postsSubject = new Subject<any[]>();
    posts = [
        new Post('Mon premier Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis vulputate venenatis. Vivamus a sagittis arcu.', 1, new Date(), 0),
        new Post('Mon deuxieme Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis vulputate venenatis. Vivamus a sagittis arcu.', 0, new Date(), 1),
        new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis vulputate venenatis. Vivamus a sagittis arcu.', -2, new Date(), 2),
    ];

  emitPostSubject() {
      this.postsSubject.next(this.posts.slice());
  }
    addOne(title: string, content: string) {
      const postObject = {
          title: '',
          content: '',
          loveIts: 0,
          created_at: new Date(),
          index: 0,
      };
      postObject.title = title;
      postObject.content = content;
      postObject.index = this.posts[(this.posts.length - 1)].index + 1;
      this.posts.push(postObject);
      this.emitPostSubject();
    }

    deleteOne(post: Post) {
        if (confirm('Etes-vous sûr de vouloir supprimer ce post ?')) {
            const postIndexToRemove = this.posts.findIndex(
                (postEl) => {
                    if (postEl === post) {
                        return true;
                    }
                }
            );
            this.posts.splice(postIndexToRemove, 1);
            this.emitPostSubject();
      } else {
            return null;
        }
    }

    addOneLove(post: Post) {
        const postIndexToLove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts[postIndexToLove].loveIts += 1;
        this.emitPostSubject();
    }

    removeOneLove(post: Post) {
        const postIndexToNotLove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts[postIndexToNotLove].loveIts -= 1;
        this.emitPostSubject();
    }


}
