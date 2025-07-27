import Dexie from "dexie";
import type { Table } from "dexie";

export interface Post {
  id?: number;
  content: string;
  createdAt: string;
}

class InstaLiteDB extends Dexie {
  posts!: Table<Post, number>;
  constructor() {
    super("instaLiteDB");
    this.version(1).stores({
      posts: "++id, content, createdAt",
    });
  }
}
const db = new InstaLiteDB();

export const createPost = async (content: string): Promise<Post> => {
  const post: Post = { content, createdAt: new Date().toISOString() };
  const id = await db.posts.add(post);
  return { ...post, id };
};

export const fetchPosts = async (): Promise<Post[]> => {
  return await db.posts.orderBy("createdAt").reverse().toArray();
};

export const deletePost = async (id: number): Promise<number> => {
  await db.posts.delete(id);
  return id;
};

export const updatePost = async ({
  id,
  content,
}: {
  id: number;
  content: string;
}): Promise<{ id: number; content: string }> => {
  await db.posts.update(id, { content });
  return { id, content };
};
