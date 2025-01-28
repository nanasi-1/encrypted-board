import { Section, Section2 } from "../ui";

export default function HowToUse() {
  return (
    <Section
      id="how-to-use"
      title="暗号掲示板の使い方"
    >
      <Section2 title="デフォルト鍵" id="default-key">
        <ul>
          <li>本来はツールを使って自分で鍵を生成する必要がある</li>
          <li>当掲示板では簡単に利用してもらうため、あらかじめ3つの鍵=デフォルト鍵を用意している</li>
          <li>掲示板内でなら自由に使ってOK</li>
        </ul>
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