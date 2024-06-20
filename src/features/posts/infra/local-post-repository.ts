import { Post } from "../domain/post";
import { CreatePostParams, PostRespository } from "../domain/post-repository";

export class LocalPostRepository implements PostRespository {
  private posts: Post[] = [];

  async getAll(): Promise<Post[]> {
      return new Promise<Post[]>((resolve) => {
        setTimeout(() => {
          console.log(this.posts)
          resolve(this.posts);
        }, 2000)
      })
  }

  async create(params: CreatePostParams): Promise<void> {
      const post: Post = {
        id: this.generateId(),
        createdAt: '',
        imageURL: params.imageFile,
        description: params.description,
        title: params.title,
        user: {
          id: '',
          email: 'sugey@gmail.com',
          firstname: 'sugey',
          profileImage: ''
        }
      }

      return new Promise<void>((resolve) => {
        setTimeout(() => {
          this.posts.push(post);
          resolve()
          console.log('BB: ' , this.getAll())
        }, 2000)
      })
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}