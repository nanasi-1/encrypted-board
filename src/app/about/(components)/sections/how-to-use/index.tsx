import Link from "next/link";
import { EffectWrapper, Section, Section2 } from "../../ui";
import { Icones, KeyIcon } from "@/components/ui/icons";
import ShowDefaultKeyButton from "@/app/(components)/default-keys/show-button";

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
      <Section2 title="平文を投稿する">
        <ul>
          <li>右下のボタンから投稿できる</li>
          <li>平文と公開鍵（デフォルト鍵からコピペしてもOK）を入力する必要がある</li>
          <li>当掲示板では鍵の識別にハッシュを使っていて、これは投稿に表示される</li>
        </ul>
      </Section2>
      <Section2 title="暗号文を復号する">
        <ul>
          <li>公開鍵と対の秘密鍵を使うことで復号できる</li>
          <li>正しい鍵が入力された場合は平文が表示される</li>
          <li>鍵が合わない場合はエラーが出て、それぞれの鍵のハッシュが表示される</li>
          <li>掲示板の投稿にはハッシュがあるので、それを見てどの鍵を使うべきか判断する</li>
        </ul>
      </Section2>
    </Section>
  )
}