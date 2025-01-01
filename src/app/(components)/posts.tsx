import Pagination from "@/components/ui/pagination/pagination";
import PostCard from "./post-card/post-card";
import { PostData } from "@/types";


export default async function Posts({ currentPage }: {
  currentPage: number
}) {
  const hasNext = currentPage < 4 // 仮
  const posts: readonly PostData[] = [{}, {}, {}] as any

  return (
    <div className="flex items-center flex-col gap-y-7">
      <PostCard />
      <PostCard />
      <PostCard />
      <Pagination currentPage={currentPage} hasNext={hasNext} baseHref="/?page=" />
    </div>
  )
}