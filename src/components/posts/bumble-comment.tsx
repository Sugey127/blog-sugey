"use client";
import { Comment } from "@/features/posts/domain/comment";
import { Avatar } from "../users/avatar";

interface Props {
    comment: Comment
}

export async function BumbleComment({ comment }: Props) {
    return (
        // JSON.stringify(comment)
        <div className="">
            <Avatar username={comment.user.username} imageURL={comment.user.avatar} />            <span>{ comment.user.username }</span>
            <p>{comment.content}</p>
        </div>
    );
}