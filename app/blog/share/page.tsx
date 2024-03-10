import {sharePost} from "@/lib/actions";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Share Post",
  description: "Share Post Page",
};

export default function SharePostPage() {
  return (
    <>
      <h1 className="text-center my-8 text-4xl">Share your Post</h1>
      <form className="text-white" action={sharePost}>
        <div className="mb-4">
          <label htmlFor="name" className="block">Your name</label>
          <input type="text" id="name" name="name" required className="bg-black border border-white rounded-md py-2 px-4 w-full"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Your email</label>
          <input type="email" id="email" name="email" required className="bg-black border border-white rounded-md py-2 px-4 w-full"/>
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block">Title</label>
          <input type="text" id="title" name="title" required className="bg-black border border-white rounded-md py-2 px-4 w-full"/>
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="block">Short Summary</label>
          <input type="text" id="summary" name="summary" required className="bg-black border border-white rounded-md py-2 px-4 w-full"/>
        </div>
        <div className="mb-4">
          <label htmlFor="instructions" className="block">Instructions</label>
          <textarea id="instructions" name="instructions" rows={10} required className="bg-black border border-white rounded-md py-2 px-4 w-full"></textarea>
        </div>
        <div className="mb-4">
          <button type="submit" className="bg-white text-black py-2 px-4 rounded-md">Share Post</button>
        </div>
      </form>
    </>
  );
}