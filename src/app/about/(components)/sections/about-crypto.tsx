import Cipher from "@/components/ui/cipher";
import { ColorStrong, EffectWrapper, Section, Section2 } from "../ui";
import { Icones, KeyIcon } from "@/components/ui/icons";

export default function AboutCrypto() {
  return (
    <Section id="about-crypto" title="暗号とは">
      {/* 一応がんばってはみましたが、それでも間違いはたくさんあると思うので、指摘してくださると助かります。*/}
      <Section2>
        <p>
          そもそも暗号とは、<strong>特別な知識なしでは読めない文</strong>のことです。<br />
          特別な知識とは例えば暗号の復号アルゴリズムがありますが、これ以外にも様々な知識が当てはまります。<br />
        </p>
        <p>
          暗号文は多くの場合、<ColorStrong>秘匿</ColorStrong>を目的として暗号化されています。<br />
          秘匿の目的は様々です。<br />
        </p>
        <div className="relative">
          <ul>
            <li>重要な機密文書を第三者が解読できないようにしたい</li>
            <li>クラッカーからWebサイト閲覧の接続を隠したい</li>
            <li>ハッキングをするとき、ターゲットの重要なファイルを自分しか読めないようにしたい</li>
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
          本当に文書を秘匿したいとき、暗号の復号方法は隠し通さなければなりません。<br />
          ...と言いたいところですが、実はより優れた方法があります。<br />
          それは<strong>鍵</strong>を使った暗号方式です。<br />
        </p>
      </Section2>
      <Section2 title="暗号鍵">
        <EffectWrapper className="right-10">
          <Icones Icon={KeyIcon} className="text-9xl" />
        </EffectWrapper>
        <p>
          人類はこれまで暗号について数々の研究を重ね、たくさんの暗号方式を作り上げてきました。<br />
          その中で提案された理論に、<a href="https://ja.wikipedia.org/wiki/ケルクホフスの原理">ケルクホフスの原理</a>があります。<br />
          この内容は、暗号方式そのものを秘匿する代わりに<strong>鍵を秘匿したほうが安全である</strong>というものです。<br />
        </p>
        <p>
          暗号鍵を使った方式では、事前に作成された鍵を使って文書を暗号化します。<br />
          かつ<strong>暗号文の復号には鍵が必要</strong>になるので、鍵が漏洩しなければ安全ということになります。<br />
        </p>
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
    <EffectWrapper className="leading-6 w-2/3 top-3 text-sm opacity-30">
      <Cipher>TQ4UMc9vAgY+OekbQ9pjh/Js25gj7Mkry3+L0s2L/ztPoMNudB5WFpORGPY7zyWSDT6DrwHtf7Ejy6rvStAJoWH2+gHOwE6t5P+TvcrMMq/sWOK68s0SbdXNCV6tMQVWzr9Mg77fOFamG8fVTzJpL2vrlIf8+NLIu94MzcMUCbNQIDfYBfr91Lh9fXipfjbNwTL/vuKjtAiRDBVZ2wXYL5nA7nM82B2Y44Qc6LCglcGJRx6j1AR6pfaAGUsgodJNaNC6jGCjSm62CGhSNpWwjcbog4h0VnjvHq3VOXXRGGgF38jpLuS9gHebXa2hyshKEDZybZB9myHzI27bAMNZ0Q==</Cipher>
    </EffectWrapper>
  )
}