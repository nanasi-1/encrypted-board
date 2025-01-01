import Pagination from "@/components/ui/pagination/pagination";
import PostCard from "./post-card/post-card";

export default async function Posts({ currentPage }: {
  currentPage: number
}) {
  return (
    <div className="flex items-center flex-col gap-y-7">
      <PostCard />
      <PostCard />
      <PostCard />
      <Pagination currentPage={currentPage} maxPage={4} baseHref="/?page=" />
    </div>
  )
}