import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import {Post} from "@/app/blog/[slug]/page";

const db = sql("posts.db");

export function getPosts(): Post[] {
  return <Post[]>db.prepare('SELECT * FROM posts').all();
}

export function getPost(slug: string): Post {
  return <Post>db.prepare('SELECT * FROM posts WHERE slug = ?').get(slug);
}

export async function savePost(post: Post) {
  post.slug = slugify(post.title, {lower: true});
  post.instructions = xss(post.instructions);
  db.prepare(`
    INSERT INTO posts (title, summary, instructions, creator, creator_email, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @slug
    )
  `).run(post);
}