import { CommentRepository, CreateCommentParams } from "../domain/comment-respository";
import { Comment } from '../domain/comment';

export class LocalCommentRepository implements CommentRepository {
  private comments: Comment[] = [];

  async getAllByPostId(id: string): Promise<Comment[]> {
    return new Promise<Comment[]>((resolve) => {
      setTimeout(() => {
        resolve(this.comments);
      }, 2000)
    })
  }

  async create(params: CreateCommentParams): Promise<void> {
    const comment: Comment = {
      ...params,
      id: '',
      createdAt: '',
      user: {
        id: '',
        email: 'sugey@gmail.com',
        firstname: 'sugey',
        profileImage: ''
      }
    }

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.comments.push(comment);
        resolve()
      }, 1000)
    })
  }
}