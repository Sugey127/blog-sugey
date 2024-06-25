import { Comment } from "../domain/comment";
import { CommentRepository, CreateCommentParams } from "../domain/comment-respository";
import Cookies from 'js-cookie';


export class ApiCommentRepository implements CommentRepository {
  private POST_API_URL = 'http://localhost:8080/api/v1/posts';

  async getAllByPostId(postId: string): Promise<Comment[]> {
    const token = Cookies.get('auth_token');
    const headers = new Headers();

    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    } else {
        throw new Error('No token found');
    }

    const response = await fetch(`${this.POST_API_URL}/${postId}/comments`, {
      headers: headers,
      cache: 'no-store',
      next: { revalidate: 10000, tags: ['comments'] }
    });

    if(!response.ok) {
        throw new Error('something went wwrong');
    }

    return await response.json();

  }

  create(params: CreateCommentParams): Promise<void> {
    throw new Error("Method not implemented.");
  }

}