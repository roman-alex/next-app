import Link from "next/link";
import type {Metadata} from "next";
import {getPosts} from "@/lib/posts";
import Post from "@/components/post";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Page",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <h1 className="text-center my-8 text-4xl">Blog</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-cols-3 gap-3">
        {posts.map((post: any) => (
          <Post key={post.slug} {...post} />
        ))}
        <Link href="/blog/share" className="p-4 rounded-md border border-white-300 flex items-center justify-center text-5xl">+</Link>
      </div>
    </>
  );
}