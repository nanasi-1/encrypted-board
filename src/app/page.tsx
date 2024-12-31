import { Icones, LockIcon } from "@/components/ui/icons";
import PostCard from "./(components)/post-card/post-card";
import Pagination from "@/components/ui/pagination/pagination";

export default function Home() {
  return (
    <>
      <div className="justify-center flex items-center flex-col gap-y-4 mb-12">
        <div className="bg-black px-3 py-1">
          <h1 className="text-center text-3xl font-bold text-primary">Hello World!</h1>
        </div>
        <p>
          <Icones Icon={LockIcon} color="primary" position="left-of-text" />
          <span>暗号掲示板は現在準備中です</span>
        </p>
        <p>
          <a href="https://github.com/nanasi-1/encrypted-board" target="_blank" className="text-secondary underline">GitHub</a>
        </p>
      </div>
      <div className="flex items-center flex-col gap-y-7">
        <PostCard />
        <PostCard />
        <PostCard />
        <Pagination />
      </div>
    </>
  );
}
