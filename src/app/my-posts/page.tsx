import Card from '@/components/card';
import { Navbar } from '@/components/navigators/navbar';
import { PostCards } from '@/components/posts/post-cards';
import { Suspense } from 'react';

export default function MyPublications() {

  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading cards</p>}>
        <PostCards />
      </Suspense>
    </>
    
  );
}
