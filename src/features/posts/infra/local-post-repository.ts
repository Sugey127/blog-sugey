import { Post } from "../domain/post";
import { CreatePostParams, PostRespository } from "../domain/post-repository";

export class LocalPostRepository implements PostRespository {
  private posts: Post[] = [];

  async getAll(): Promise<Post[]> {
      return new Promise<Post[]>((resolve) => {
        setTimeout(() => {
          console.log(this.posts)
          resolve(this.posts);
        }, 6000)
      })
  }

  async create(params: CreatePostParams): Promise<void> {
    throw new Error();
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}