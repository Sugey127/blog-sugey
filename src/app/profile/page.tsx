import { Navbar } from "@/components/navigators/navbar";
import { Profile } from "@/components/users/profile";
import { Suspense } from "react";

export default async function Publications() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading cards</p>}>
        <Profile />
      </Suspense>
    </>
  );
}
