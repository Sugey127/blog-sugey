import { Post } from "../domain/Post";
import { PostReposotory } from "../domain/PostRepostory";

export class ApiPostRepository implements PostReposotory {
  // private URL: string = 'http://localhost:3000/api/'
  
  create(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Post[]> {
    throw new Error("Method not implemented.");
  }
}