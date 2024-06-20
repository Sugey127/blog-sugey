import { User } from "@/features/users/domain/user";
import { Comment } from "./comment";

export interface CreateCommentParams {
  title: string;
  description: string;
  imageURL: string;
  user: User;
}

export interface CommentRepository {
  getAllByPostId(id: string): Promise<Comment[]>
  create(params: CreateCommentParams): Promise<void>;
}