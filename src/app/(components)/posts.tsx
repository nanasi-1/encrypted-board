import Pagination from "@/components/ui/pagination/pagination";
import PostCard from "./post-card/post-card";
import { getAllPosts } from "@/api-client";

export default async function Posts({ currentPage }: {
  currentPage: number
}) {
  const { 
    response, 
    result: { posts, hasNext } 
  } = await getAllPosts(currentPage)

  if (!response.ok) {
    return (
      <div>ERROR: 投稿が取得できませんでした</div>
    )
  }

  return (
    <div className="flex items-center flex-col gap-y-7">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      <Pagination currentPage={currentPage} hasNext={hasNext} baseHref="/?page=" />
    </div>
  )
}