import { Post } from "./post";

export interface CreatePostParams {
  title: string;
  description: string;
  imageFile: File;
}

export interface UpdatePostParams {
  title: string;
  description: string;
}

export interface PostRespository {
  create(params: CreatePostParams): Promise<void>;
  getAll(): Promise<Post[]>
  // getAllMyPosts(): Promise<Post[]>
  // deleteById(id: string): Promise<void>;
  // updateById(id: string, params: UpdatePostParams): Promise<void>;
}