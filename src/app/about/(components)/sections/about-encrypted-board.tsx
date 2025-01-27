import PostCard from "@/app/(components)/post-card/post-card";
import { Header2 } from "../ui";
import { PostData } from "@/types";

const dummyPost: PostData = {
  id: 0,
  createdAt: '2025/2/1 21:00:00',
  body: 'YEs0fTKfW8YE2kmlc18mKSPWnBpLhhAY/rUvdD7WG07mH2gqTwclQbaIaawfyzd70qwGrXqTrSODLGzyf/iaQF8hK1oj/I7oAxaCWRpiVAsBLYXDK6Lpz2drWJVDg+KQpGW7WeL0CivDkHzmDDAgCCJXspRStaoY83SeWiRODICnDlqsYzAwpXry3nrJ7UopZJ6AtgThjPk8fflBaaTO2XUuKZpiCXiu+ybP9Pq9mJrEUcQ2aefZx0l6mRyU6QeMuFmKptz6uu+VsLhrS41AOGD85TF0GQG63I7AHXMAOhkqi6q9IVak+ETwl9CFUx6fGcPgkaRA8rpKZiiwchsNZA==',
  publicKeyDigest: 'IL2ui4JVR40tlIE47CRbIHqW1cY=',
  sign: { has: true, verifyKey: 'nanasi-1' }
}

export default function AboutEncryptedBoard() {
  return (
    <section>
      <Header2>暗号掲示板とは</Header2>
      <p>
        <strong>暗号しか投稿できない匿名掲示板</strong>です。
      </p>
      <p className="mb-5">
        当掲示板には、暗号化によって秘匿された<strong>暗号文</strong>が投稿されています。<br />
        各投稿は正しく復号することで文章として読むことができます。<br />
      </p>
      <div className="leading-6 w-5/6">
        <PostCard post={dummyPost} />
      </div>
    </section>
  )
}