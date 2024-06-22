import { Post } from "../domain/post";
import { CreatePostParams, PostRespository } from "../domain/post-repository";

export class ApiPostRepository implements PostRespository {
  private POST_API_URL = 'http://localhost:8080/api/v1/posts';

  async getAll(): Promise<Post[]> {
    const response = await fetch(this.POST_API_URL, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzNmI0ZDljLTEzNDgtNDlkNS1iM2M2LTNmMWFkNDk4Y2M5ZiIsImlhdCI6MTcxOTA0MzYyOSwiZXhwIjoxNzE5MDY1MjI5fQ.uKKnNF9p_2g9pYaIlPRZ6Syqcvep08dXZV0K4a_RFMQ',
      }
    });

    if(!response.ok) {
        throw new Error('failed request');
    }

    return await response.json();
  }

  async create(params: CreatePostParams): Promise<void> {
    throw new Error();
  }
}