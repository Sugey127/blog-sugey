import { PostRespository } from "@/features/posts/domain/post-repository";
import { CommentRepository } from "@/features/comments/domain/comment-respository";
import { LocalCommentRepository } from "@/features/comments/infra/local-comment-repository";
import { LocalPostRepository } from "@/features/posts/infra/local-post-repository";

export function inyectionContainer() {
  const localCommentRepository: CommentRepository = new LocalCommentRepository();
  const localPostRepository: PostRespository = new LocalPostRepository();

  return {
    localCommentRepository,
    localPostRepository
  }
}