"use server";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {savePost} from "@/lib/posts";

function isValidText(text: string) {
  return !text || text.trim() === "";
}

export async function sharePost(formData: { get: (arg0: string) => string }) {
  const post = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
  }

  if (
    isValidText(post.creator) ||
    isValidText(post.creator_email) ||
    isValidText(post.title) ||
    isValidText(post.summary) ||
    isValidText(post.instructions) ||
    !post.creator_email.includes("@")
  ) {
    throw Error("Invalid input");
  }

  await savePost(post);
  revalidatePath("/blog");
  redirect("/blog");
}