import { inyectionContainer } from "@/features/shared/infra/inyection-container";
import { BumbleComment } from "./bumble-comment";

export async function CommentsChat({ postId }: { postId: string }) {
  const { apiCommentRepository } = inyectionContainer();
  const comments = await apiCommentRepository.getAllByPostId(postId);

  return (
    <div className="flex flex-col m-auto text-black">
      {comments.map((comment) => <BumbleComment key={comment.id} comment={comment} />)}
    </div>
    
  );
}