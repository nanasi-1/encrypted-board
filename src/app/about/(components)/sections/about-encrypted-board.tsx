import PostCard from "@/app/(components)/post-card/post-card";
import { Header2 } from "../ui";
import { PostData } from "@/types";

const dummyPost: PostData = {
  id: 0,
  createdAt: '2025/2/1 21:00:00',
  body: 'cipher-text',
  publicKeyDigest: 'public-key',
  sign: { has: false }
}

export default function AboutEncryptedBoard() {
  return (
    <section>
      <Header2>暗号掲示板とは</Header2>
      <p><strong>暗号しか投稿できない掲示板</strong>です。</p>
      <PostCard post={dummyPost} />
    </section>
  )
}