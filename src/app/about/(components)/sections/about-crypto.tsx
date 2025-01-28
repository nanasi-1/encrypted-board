import Cipher from "@/components/ui/cipher";
import { ColorStrong, Section, Section2 } from "../ui";

export default function AboutCrypto() {
  return (
    <Section id="about-crypto" title="暗号とは">
      {/* 一応がんばってはみましたが、それでも間違いはたくさんあると思うので、指摘してくださると助かります。*/}
      <Section2>
        <p>
          そもそも暗号とは、<strong>特別な知識なしでは読めない文章</strong>のことです。<br />
          特別な知識とは例えば暗号の復号方法がありますが、これ以外にも様々な知識が当てはまります。<br />
        </p>
        <p>
          暗号文は多くの場合、<ColorStrong>秘匿</ColorStrong>を目的として暗号化されています。<br />
          秘匿の目的は様々です。<br />
        </p>
        <div className="relative">
          <ul>
            <li>戦時中のとき、敵国には読めない文章を作りたい</li>
            <li>クラッカーからWebサイト閲覧の接続を隠したい</li>
            <li>ハッキングをするとき、ターゲットの重要なファイルを読めないようにしたい</li>
          </ul>
          <CipherEffect />
        </div>
        <p>
          日本で有名な暗号方式には<a href="https://nazotoki.fandom.com/ja/wiki/たぬき暗号">たぬき暗号</a>があります。<br />
          たぬき暗号の暗号文は「た」を抜くという復号方法を知らないと読めません。<br />
          そのため一種の暗号だと言えますが、日本中に解読方法が知れ渡っているという性質上、復号は容易です。<br />
          もちろん多くの場合、暗号は<strong>解読されてはいけません。</strong><br />
        </p>
        <p>
          本当に文章を秘匿したいとき、暗号の復号方法は隠し通さなければなりません。<br />
          ...と言いたいところですが、実はより優れた方法があります。<br />
          それは<strong>鍵</strong>を使った暗号方式です。<br />
        </p>
      </Section2>
      <Section2 title="暗号鍵">
        <ul>
          <li>暗号化や復号に<strong>鍵</strong>が必要になる暗号方式</li>
          <li>鍵がわからないと解読できないが、鍵は再生成可能なのでいつでも取り替えられる</li>
          <li>使うもの: 専用のアルゴリズム + 鍵</li>
        </ul>
      </Section2>
      <Section2 title="公開鍵暗号">
        <ul>
          <li>秘密鍵と公開鍵の2つの鍵を使う</li>
          <li>公開鍵: 暗号化に使う、公開しても問題ない</li>
          <li>秘密鍵: 復号に使う、秘密にしておく必要がある</li>
          <li><s>メッセージの送信元の確認はできないので、ちゃんとやるなら公開鍵認証などと併用する必要がある</s></li>
          <li>ここに画像を載せたい</li>
        </ul>
      </Section2>
      <Section2 title="要約">
        <ul>
          <li>第三者が文を見ても特別な知識なしでは読めない秘匿された文</li>
          <li>相手に暗号化ツールを知られても、鍵が知られなければ安全</li>
          <li>最近はコンピューターでの暗号化が主流</li>
        </ul>
      </Section2>
    </Section>
  )
}

function CipherEffect() {
  return (
    <div className="block leading-6 absolute right-0 w-2/3 top-3 text-sm opacity-30 select-none -z-10">
      <Cipher>TQ4UMc9vAgY+OekbQ9pjh/Js25gj7Mkry3+L0s2L/ztPoMNudB5WFpORGPY7zyWSDT6DrwHtf7Ejy6rvStAJoWH2+gHOwE6t5P+TvcrMMq/sWOK68s0SbdXNCV6tMQVWzr9Mg77fOFamG8fVTzJpL2vrlIf8+NLIu94MzcMUCbNQIDfYBfr91Lh9fXipfjbNwTL/vuKjtAiRDBVZ2wXYL5nA7nM82B2Y44Qc6LCglcGJRx6j1AR6pfaAGUsgodJNaNC6jGCjSm62CGhSNpWwjcbog4h0VnjvHq3VOXXRGGgF38jpLuS9gHebXa2hyshKEDZybZB9myHzI27bAMNZ0Q==</Cipher>
    </div>
  )
}