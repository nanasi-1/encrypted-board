import Pagination from "@/components/ui/pagination/pagination";
import PostCard from "./post-card/post-card";
import { PostData } from "@/types";

export default async function Posts({ currentPage }: {
  currentPage: number
}) {
  const hasNext = currentPage < 4 // 仮
  const posts = postsSeedData // ページング済み

  return (
    <div className="flex items-center flex-col gap-y-7">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      <Pagination currentPage={currentPage} hasNext={hasNext} baseHref="/?page=" />
    </div>
  )
}

const postsSeedData: readonly PostData[] = [{
  id: 0,
  createdAt: "2024/12/28 18:56",
  body: 'this is not a cipher',
  publicKeyDigest: 'wAcrImJaLu2iwSz+q428Z7',
  sign: {
    has: false
  }
}, {
  id: 1,
  createdAt: "2024/12/31 23:59",
  body: '終わらん',
  publicKeyDigest: 'wAcrImJaLu2iwSz+q428Z7',
  sign: {
    has: true,
    signKeyDigest: 'mJ+DKws'
  }
}, {
  id: 2,
  createdAt: "2025/1/1 00:00",
  body: 'Happy New Year!',
  publicKeyDigest: 'wAcrImJaLu2iwSz+q428Z7',
  sign: {
    has: true,
    signKeyDigest: 'mJ+DKws'
  }
}, {
  id: 3,
  createdAt: "2024/1/1 00:01",
  body: 'あけましておめでとうございます',
  publicKeyDigest: 'wAcrImJaLu2iwSz+q428Z7',
  sign: {
    has: false,
  }
}, {
  id: 4,
  createdAt: "2024/1/2 12:30",
  body: '新年の抱負を考え中...',
  publicKeyDigest: 'vBxhCmQjPu3czFi+o539A4',
  sign: {
    has: true,
    signKeyDigest: 'kL+8Dhs'
  }
}, {
  id: 5,
  createdAt: "2024/1/3 09:15",
  body: '新しい冒険が始まった！',
  publicKeyDigest: 'vBxhCmQjPu3czFi+o539A4',
  sign: {
    has: false
  }
}, {
  id: 6,
  createdAt: "2024/1/5 16:00",
  body: '今日は寒いけど、元気！',
  publicKeyDigest: 'vBxhCmQjPu3czFi+o539A4',
  sign: {
    has: false
  }
}, {
  id: 7,
  createdAt: "2024/1/7 10:45",
  body: '勉強に追われている日々。',
  publicKeyDigest: 'wAcrImJaLu2iwSz+q428Z7',
  sign: {
    has: true,
    signKeyDigest: 'nM7kPbw'
  }
}, {
  id: 8,
  createdAt: "2024/1/10 19:30",
  body: '映画を観に行きたい！',
  publicKeyDigest: 'wAcrImJaLu2iwSz+q428Z7',
  sign: {
    has: true,
    signKeyDigest: 'nM7kPbw'
  }
}, {
  id: 9,
  createdAt: "2024/1/12 13:00",
  body: 'どうしてこんなに眠いんだ...',
  publicKeyDigest: 'wAcrImJaLu2iwSz+q428Z7',
  sign: {
    has: false
  }
}, {
  id: 10,
  createdAt: "2024/1/14 17:20",
  body: '最近本を読み始めた。',
  publicKeyDigest: 'tBjdKmTiZy4axFg+q815K6',
  sign: {
    has: true,
    signKeyDigest: 'jH+XK7u'
  }
}, {
  id: 11,
  createdAt: "2024/1/16 20:40",
  body: '今日のランチはカレーでした。',
  publicKeyDigest: 'tBjdKmTiZy4axFg+q815K6',
  sign: {
    has: false
  }
}, {
  id: 12,
  createdAt: "2024/1/18 08:05",
  body: '今日は早起きしたぞ！',
  publicKeyDigest: 'tBjdKmTiZy4axFg+q815K6',
  sign: {
    has: true,
    signKeyDigest: 'jH+XK7u'
  }
}, {
  id: 13,
  createdAt: "2024/1/20 11:00",
  body: 'ようやく週末が来た！',
  publicKeyDigest: 'wAcrImJaLu2iwSz+q428Z7',
  sign: {
    has: false
  }
}, {
  id: 14,
  createdAt: "2024/1/22 14:10",
  body: '今日の目標を立てよう。',
  publicKeyDigest: 'vBxhCmQjPu3czFi+o539A4',
  sign: {
    has: true,
    signKeyDigest: 'kL+8Dhs'
  }
}];