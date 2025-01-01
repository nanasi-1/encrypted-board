import Pagination from "@/components/ui/pagination/pagination";
import PostCard from "./post-card/post-card";

export default async function Posts({ currentPage }: {
  currentPage: number
}) {
  const hasNext = currentPage < 4 // 仮

  return (
    <div className="flex items-center flex-col gap-y-7">
      <PostCard />
      <PostCard />
      <PostCard />
      <Pagination currentPage={currentPage} hasNext={hasNext} baseHref="/?page=" />
    </div>
  )
}