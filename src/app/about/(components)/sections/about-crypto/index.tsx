import Cipher from "@/components/ui/cipher";
import { ColorStrong, EffectWrapper, Section, Section2 } from "../../ui";
import { Icones, KeyIcon } from "@/components/ui/icons";
import rsaDetails from './公開鍵暗号とは.svg'
import Image from 'next/image'

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
        <p>
          ということで、最初に編み出されたのは<a href="https://ja.wikipedia.org/wiki/共通鍵暗号">共通鍵暗号</a>でした。<br />
          これは今も使われているほど実用的な暗号ですが、暗号化と復号に同じ鍵を使用する方式なため、
          鍵を送信する際に盗まれる可能性があるという問題があります。<br />
          その問題は、別の暗号方式である<strong>公開鍵暗号</strong>の登場によって解決することとなりました。<br />
        </p>
      </Section2>
      <Section2 title="公開鍵暗号">
        <p>
          <a href="https://ja.wikipedia.org/wiki/公開鍵暗号">公開鍵暗号</a>は暗号鍵を使った暗号方式の一つです。<br />
          当掲示板ではこの公開鍵暗号のうち、<a href="https://ja.wikipedia.org/wiki/RSA暗号">RSA暗号</a>を使用しています。<br />
          この方式では、<ColorStrong>公開鍵</ColorStrong>と<ColorStrong>秘密鍵</ColorStrong>の2つの鍵が使われます。<br />
        </p>
        <p>
          公開鍵と秘密鍵にはそれぞれ別の責務があります。<br />
          これらは通信を行う前に事前に生成され、2つの鍵のうち<strong>公開鍵は暗号の送信者に渡す</strong>必要があります。<br />
          それぞれの鍵は以下のように使用されます。<br />
        </p>
        <ul className="list-none ml-2 mb-3">
          <li>
            <ColorStrong><Icones Icon={KeyIcon} position="left-of-text" />公開鍵: 暗号化</ColorStrong>
            に使う、公開しても問題ない
          </li>
          <li>
            <ColorStrong><Icones Icon={KeyIcon} position="left-of-text" />秘密鍵: 復号</ColorStrong>
            に使う、秘密にしておく必要がある
          </li>
        </ul>
        <p>
          図解にするとこのようになります。<br />
        </p>
        <div className="my-5 py-6 px-6 border-2 border-primary w-fit">
          <Image src={rsaDetails} alt="公開鍵暗号とは" width={500} />
        </div>
        <p>
          なお、ここまでで説明した公開鍵暗号や共通鍵暗号は、
          <strong>コンピューターを使用して暗号化 / 復号する</strong>
          ことが前提となっています。<br />
          これは暗号が時代とともに強固になっていったため、
          <strong>要求される計算量が非常に増大</strong>
          し、手作業で処理することが現実的ではなくなったためです。<br />
        </p>
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