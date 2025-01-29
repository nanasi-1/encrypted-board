import Link from "next/link";
import { EffectWrapper, Section, Section2 } from "../../ui";
import { AddEncryptionIcon, Icones, KeyIcon, LockIcon } from "@/components/ui/icons";
import ShowDefaultKeyButton from "@/app/(components)/default-keys/show-button";
import Cipher from "@/components/ui/cipher";
import PostCard from "@/app/(components)/post-card/post-card";
import { PostData } from "@/types";

const dummyPost: PostData = {
  body: 'UYe4wsQiJA5RzaAvREd7GjzmkIfUwYOD28nBtnm485Vdtu2ZOAc1vmB60nuk2MCQGurTjNeO7U5FuvnHFKPtTqlzOsIGXCJvPoxYQlI8LFdhoAVJpZrNLlrJ9eTbreui0F70iB8PAvQxFbvF8O/WhD0vwdbDjz6Bhmuw+1NQn9LC19rC5p6Rm3E4DzUczVVIa7g5uzwXDGVP8cYof1lkwl3oLfcJWFoVH79Cx2sMEM59UxRkOTWES5/npmZ7XDbCjwUSGudpC4SZXHS0nYHY+tIymt8GzavY5hYAWef1F73i24xkn5a/M+0624nTXgw19w1E8Yjzih8bwO85V6sGYA==',
  publicKeyDigest: 'RT7o2GZz1+Sqn9sZqmUrobOqDeU=',
  id: 0,
  createdAt: new Date().toString(),
  sign: { has: false }
}

const dummyPost2: PostData = {
  body: 'ここに暗号文が表示されます',
  publicKeyDigest: '公開鍵のハッシュ',
  id: 0,
  createdAt: new Date().toString(),
  sign: { has: false }
}

export default function HowToUse() {
  return (
    <Section
      id="how-to-use"
      title="暗号掲示板の使い方"
    >
      <p>
        ここまでで公開鍵暗号についての説明は完了したので、次は暗号掲示板の使用方法を紹介します。<br />
        なお、暗号掲示板では<strong>公開鍵暗号の暗号文を投稿</strong>することができます。<br />
      </p>
      <Section2 title="デフォルト鍵" id="default-key">
        <p>
          公開鍵暗号を使うためには公開鍵と秘密鍵が必要です。<br />
          これらは専用のソフトウェアを使用することで生成できますが、少し手間がかかります。<br />
        </p>
        <div className="relative flex gap-x-10">
          <p>
            当掲示板では、<strong>あらかじめ生成しておいた鍵</strong>をデフォルト鍵として公開しています。<br />
            デフォルト鍵は
            <Link href="/">トップページ</Link>
            右下の
            <Icones Icon={KeyIcon} position="left-of-text" />
            ボタン、または右のボタンから確認可能です。<br />
            これらの鍵は<strong>暗号掲示板内では自由に使用できます</strong>ので、ぜひご利用ください。<br />
          </p>
          <EffectWrapper className="select-all opacity-100 relative z-0">
            <ShowDefaultKeyButton />
          </EffectWrapper>
        </div>
        <hr className="mb-5 border-black border-2" />
        <p>
          なお、手間はかかりますが独自の鍵を使用することも可能です。<br />
          その場合は、秘密鍵を公開しなければまず解読できない暗号文が生成されます。<br />
          鍵のアルゴリズムは
          <a href="https://github.com/nanasi-1/encrypted-board/blob/212d26396f20b0de57eb5d23b9477c5294966c4c/src/lib/generate-key.ts#L10-L23">こちらのソースコード</a>
          を参考にしてください。<br />
        </p>
      </Section2>
      <Section2 title="暗号文を投稿する">
        <p>
          暗号文の投稿には以下の2つが必要です。<br />
        </p>
        <ul>
          <li>暗号化のための<strong>公開鍵</strong>（デフォルト鍵を使用可能）</li>
          <li>伝えたいメッセージである<strong>平文</strong></li>
        </ul>
        <p>
          投稿するには、<Link href="/">トップページ</Link>の右下にある
          <Icones Icon={AddEncryptionIcon} />ボタンを押し、これらの情報を入力します。<br />
          そして下にある「投稿」ボタンを押すことで、投稿が完了します。<br />
        </p>
        <div className="mb-5">
          <PostCard post={dummyPost2} />
        </div>
        <p>
          なお、当掲示板では鍵の識別に<strong>ハッシュ</strong>を利用しています。<br />
          ハッシュは鍵ごとに一意な文字列で、例えば<Cipher>IL2ui4JVR40tlIE47CRbIHqW1cY=</Cipher>という感じです。<br />
          暗号化に使用された鍵のハッシュは、投稿の右上の
          <Icones Icon={LockIcon} />
          から確認できます。<br />
        </p>
      </Section2>
      <Section2 title="復号する">
        <p>
          秘密鍵を知っている投稿は<strong>復号して平文を読む</strong>ことが可能です。<br />
        </p>
        <p>
          各投稿の暗号化に使用された公開鍵は、ハッシュを確認することで識別できます。<br />
          そのハッシュの秘密鍵を知っている（デフォルト鍵も含む）場合、
          <strong>投稿右上の<Icones Icon={KeyIcon} />を押して秘密鍵を入力</strong>
          することで、復号して平文を閲覧できます。<br />
        </p>
        <div className="mb-5">
          <PostCard post={dummyPost} />
        </div>
        <p>
          例えば、こちらの投稿を見てみます。<br />
          この暗号文の公開鍵のハッシュは<Cipher>RT7o2GZz1+Sqn9sZqmUrobOqDeU=</Cipher>です。<br />
          そして、このハッシュの鍵は<a href="#default-key">デフォルト鍵</a>に含まれているため、<strong>この暗号は復号可能</strong>です。<br />
        </p>
        <p>
          復号するには、デフォルト鍵から該当する鍵を探して<strong>秘密鍵をコピー</strong>します。<br />
          そして<Icones Icon={KeyIcon} />を押して秘密鍵を入力すると、平文が表示されるはずです。<br />
        </p>
      </Section2>
    </Section>
  )
}