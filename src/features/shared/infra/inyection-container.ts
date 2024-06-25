import { PostRespository } from "@/features/posts/domain/post-repository";
// import { ApiPostRepository } from "@/features/posts/infra/api-post-repository";
import { ApiCommentRepository } from "@/features/posts/infra/api-comment-repository";
import { CommentRepository } from "@/features/posts/domain/comment-respository";
// import { AccountRepository } from "@/features/users/domain/account-repository";
// import { ApiAccountRepository } from "@/features/users/infra/api-account-repository";
// import { ApiAuthRepository } from "@/features/users/infra/api-auth-repository";
// import { AuthRepostiry } from "@/features/users/domain/auth-repository";

export function inyectionContainer() {
  const apiCommentRepository: CommentRepository = new ApiCommentRepository();
  // const apiPostRepository: PostRespository = new ApiPostRepository();
  // const apiAccountRepository: AccountRepository = new ApiAccountRepository();
  // const apiAuthRepository: AuthRepostiry = new ApiAuthRepository();


  return {
    apiCommentRepository,
    // apiPostRepository,
    // apiAccountRepository,
    // apiAuthRepository,
  }
}