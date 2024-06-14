import { Post } from "./Post";

export interface PostReposotory {
  create(): Promise<void>;
  getAll(): Promise<Post[]>;
}