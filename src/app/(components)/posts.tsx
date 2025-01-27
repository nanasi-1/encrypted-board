import Pagination from "@/components/ui/pagination/pagination";
import PostCard from "./post-card/post-card";
import { getAllPosts } from "@/api-client";

export default async function Posts({ currentPage }: {
  currentPage: number
}) {
  const { response, result } = await getAllPosts(currentPage)

  if (!response.ok || ('status' in result)) { // resultはCustomError or 通常のレスポンス
    return (
      <div className="text-center bg-black py-10">
        <h3 className="font-bold text-xl text-red-500">ERROR: 投稿が取得できませんでした</h3>
        {'status' in result ? <p className="mt-5">{result.message}</p> : null }
      </div>
    )
  }

  return (
    <div className="flex items-center flex-col gap-y-7 px-[10%]">
      {result.posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      <Pagination currentPage={currentPage} hasNext={result.hasNext} baseHref="/?page=" />
    </div>
  )
}