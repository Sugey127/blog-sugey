import { inyectionContainer } from "@/features/shared/infra/inyection-container";
import { PostCard } from "./post-card";

export async function PostCards() {
  const { apiPostRepository } = inyectionContainer();
  const posts = await apiPostRepository.getAll();

  return (
    <div className="flex flex-col m-auto ">  
      {posts.map((post) => <PostCard {...post} key={post.id} />)}
    </div>
  );
}
