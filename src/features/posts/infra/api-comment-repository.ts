import { Comment } from "../domain/comment";
import { CommentRepository, CreateCommentParams } from "../domain/comment-respository";

export class ApiCommentRepository implements CommentRepository {
  private POST_API_URL = 'http://localhost:8080/api/v1/posts';


  async getAllByPostId(postId: string): Promise<Comment[]> {
    const response = await fetch(`${this.POST_API_URL}/${postId}/comments`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzNmI0ZDljLTEzNDgtNDlkNS1iM2M2LTNmMWFkNDk4Y2M5ZiIsImlhdCI6MTcxOTA0MzYyOSwiZXhwIjoxNzE5MDY1MjI5fQ.uKKnNF9p_2g9pYaIlPRZ6Syqcvep08dXZV0K4a_RFMQ',
      },
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