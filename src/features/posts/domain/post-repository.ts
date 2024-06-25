import { Either } from "@/features/shared/either";
import { Post } from "./post";
import { Failure } from "@/features/shared/failure";
import { User } from "@/features/users/domain/user";

export interface CreatePostParams {
  title: string;
  description: string;
  imageFile: File;
}

export interface UpdatePostParams {
  title: string;
  description: string;
}

export interface Comment {
  id: string;
  content: string;
  user: User;
}

export interface PostRespository {
  // create(params: CreatePostParams): Promise<void>;
  // getAll(): Promise<Post[]>
  create: (params: CreatePostParams) => Promise<Either<Failure, void>>;
  getAll: () => Promise<Either<Failure, Post[]>>;
  getAllCommentsByPostId: (postId: string) => Promise<Either<Failure, Comment[]>>;
  // getAllMyPosts(): Promise<Post[]>
  // deleteById(id: string): Promise<void>;
  // updateById(id: string, params: UpdatePostParams): Promise<void>;
}