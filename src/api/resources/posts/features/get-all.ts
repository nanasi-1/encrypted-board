import { PostsAPIResponse } from "@/types";
import { countAllPost, getAllPosts } from "../database";

const ONE_PAGE_POSTS = 15

// ページネーション担当
export async function getPostsByPage(page: number): Promise<PostsAPIResponse> {
  const posts = await getAllPosts({
    skip: ONE_PAGE_POSTS * (page - 1),
    take: ONE_PAGE_POSTS,
  })

  // テストしてない
  const hasNext = posts.length >= ONE_PAGE_POSTS
    ? await countAllPost() >= page
    : false

  return { posts, hasNext }
}