"use client";
import { Suspense, useState } from "react";
import Image from "next/image";
import { Post } from "@/features/posts/domain/post";
import { CommentsChat } from "./comments";

export function PostCard(post: Post) {
  const [isCommentsShowed, setIsShowedComments] = useState(false);

  return (
    <article className="w-full lg:max-w-full lg:flex relative">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${post?.multimediaURL})` }}
        title={post?.title}
      >
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                width={40}
                height={40}
                className="w-10 h-10 rounded-full mr-4"
                src={post?.user?.avatar ??
                  "https://th.bing.com/th/id/OIP.inaUKK4nXGZLIqoxcnxLDQHaHa?rs=1&pid=ImgDetMain"}
                alt={`Avatar of ${post?.user?.username}`}
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  {post?.user?.username}
                </p>
                <p className="text-gray-600">{post?.user.email}</p>
              </div>
            </div>
            <button
              onClick={() => setIsShowedComments(!isCommentsShowed) }
              className="menu-button text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              X
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6h.01M12 12h.01M12 18h.01M12 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
            </button>
          </div>
          <div className="text-gray-900 font-bold text-xl mb-2 mt-2">
            {post?.title}
          </div>
          <p className="text-gray-700 text-base mb-5">{post?.content}</p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="fill-current text-gray-500 w-4 h-4 mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
            </svg>
            {isCommentsShowed
              ? (
                <Suspense fallback={<p className="text-black">loading comments</p>}>
                  <CommentsChat postId={post.id} />
                </Suspense>
              )
              : (
                <p className="text-sm text-gray-600">
                  {6} Comments
                </p>
              )}
          </div>
        </div>
      </div>
    </article>
  );
}
