import { PostCard } from "./post-card";
import { Suspense } from "react";
import { CommentsChat } from "./comments";
import { apiPostRepository } from "@/features/posts/infra/api-post-repository";

export async function PostCards() {
  const { getAll } = apiPostRepository();
    const result = await getAll();
console.log(result.getRightValue())
  return (
    // <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5">  
    //   {posts.map((post) => <PostCard {...post} key={post.id} />)}
    // </div>
    <>
      {
          result.isRight()
          ? result.getRightValue()!.map(post => (
              <PostCard key={post.id} post={post}>
                  <Suspense fallback={<span>Loading comments</span>}>
                      <CommentsChat postId={post.id} />
                  </Suspense>
              </PostCard>
          ))
          : <pre>{result.getLeftValue()!.message}</pre>
      }
    
    </>
  );
}
