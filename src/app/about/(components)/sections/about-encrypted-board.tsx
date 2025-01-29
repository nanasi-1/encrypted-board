import PostCard from "@/app/(components)/post-card/post-card";
import { Section } from "../ui";
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
    <Section id="about-encrypted-board" title="暗号掲示板とは">
      <p>
        <strong>
          <a href="#about-crypto" className="text-primary">暗号</a>
          しか投稿できない匿名掲示板</strong>です。
      </p>
      <p>
        当掲示板には、暗号化によって秘匿された<strong>暗号文</strong>が投稿されています。<br />
        各投稿は正しく<strong>復号</strong>することで読むことができます。<br />
        暗号には公開鍵暗号方式を採用しているため、秘密鍵を知らない場合復号することは不可能です。<br />
      </p>
      <p className="mb-5">
        また、自分で暗号文を投稿することも可能です。<br />
        投稿の平文は自由な文章を入力でき、暗号化されて保存されます。<br />
      </p>
      <div className="leading-6 mb-5">
        <PostCard post={dummyPost} />
      </div>
      <p>
        投稿には公開鍵暗号の<strong>鍵</strong>が必要です。<br />
        当掲示板ではあらかじめ<a href="#default-key">デフォルト鍵</a>を用意していますので、ぜひご利用下さい。<br />
      </p>
    </Section>
  )
}