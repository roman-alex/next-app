import {getPost} from "@/lib/posts";
import {notFound} from "next/navigation";

export interface Post {
  slug?: string;
  title: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}
interface Props {
  params: {
    slug: string;
  }
}

export async function generateMetadata({ params }: Props) {
  const post: Post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.summary,
  }
}

export default function BlogPost({ params }: Props) {
  const post: Post = getPost(params.slug);
  post.instructions = post.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <h1 className="text-center my-8 text-4xl">Post Details</h1>
      <div className="p-6 rounded-md border border-white-300 text-white">
        <h2 className="text-3xl font-semibold mb-4">{post.title}</h2>
        <h3 className="text-2xl font-semibold mb-4">{post.summary}</h3>
        <p className="mb-10" dangerouslySetInnerHTML={{__html: post.instructions}}/>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <p>Creator: <i>{post.creator}</i></p>
          <p>Email: <i>{post.creator_email}</i></p>
        </div>
      </div>
    </>
  );
}