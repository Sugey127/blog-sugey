import { Comment } from "@/features/posts/domain/comment";

interface Props {
    comment: Comment
}

export async function BumbleComment({ comment }: Props) {
    return (
        JSON.stringify(comment)
    );
}
