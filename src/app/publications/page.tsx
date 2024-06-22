import { Navbar } from "@/components/navigators/navbar";
import { PostCards } from "@/components/posts/post-cards";
import { Suspense } from "react";

export default async function Publications() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading cards</p>}>
        <PostCards />
      </Suspense>
    </>
  );
}
