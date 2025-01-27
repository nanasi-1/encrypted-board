import Cipher from "@/components/ui/cipher";
import { ColorStrong, Section } from "../ui";

export default function AboutCrypto() {
  return (
    <Section id="about-crypto" title="暗号とは">
      {/* 一応がんばってはみましたが、それでも間違いはたくさんあると思うので、指摘してくださると助かります。*/}
      <section>
        <p>
          そもそも暗号とは、<strong>特別な知識なしでは読めない文章</strong>のことです。<br />
          暗号文は多くの場合、<ColorStrong>秘匿</ColorStrong>を目的として暗号化されています。<br />
        </p>
        <p>
          有名な暗号方式には<a href="https://nazotoki.fandom.com/ja/wiki/たぬき暗号">たぬき暗号</a>があります。<br />
          たぬき暗号の暗号文は「た」を抜くということを知らないと読めません。<br />
          そのため立派な暗号だと言えます。<br />
        </p>
        <p>
          しかし、たぬき暗号は近くにたぬきの絵などのヒントがありますが、実際の暗号は<strong>解読されてはいけません</strong>。<br />
          ということは、復号方法は隠し通す必要があると思うかもしれません。<br />
          それは決して間違ってはいないのですが、実はより優れた方法があります。<br />
          それは<strong>鍵</strong>を使った暗号方式です。<br />
        </p>
        <div className="block leading-6 absolute right-0 w-2/3 top-3 text-sm opacity-30 select-none">
          <Cipher>TQ4UMc9vAgY+OekbQ9pjh/Js25gj7Mkry3+L0s2L/ztPoMNudB5WFpORGPY7zyWSDT6DrwHtf7Ejy6rvStAJoWH2+gHOwE6t5P+TvcrMMq/sWOK68s0SbdXNCV6tMQVWzr9Mg77fOFamG8fVTzJpL2vrlIf8+NLIu94MzcMUCbNQIDfYBfr91Lh9fXipfjbNwTL/vuKjtAiRDBVZ2wXYL5nA7nM82B2Y44Qc6LCglcGJRx6j1AR6pfaAGUsgodJNaNC6jGCjSm62CGhSNpWwjcbog4h0VnjvHq3VOXXRGGgF38jpLuS9gHebXa2hyshKEDZybZB9myHzI27bAMNZ0Q==</Cipher>
        </div>
      </section>
      <section>
        <h3>まとめ</h3>
        <ul className="list-disc ml-5">
          <li>第三者が文を見ても特別な知識なしでは読めない秘匿された文</li>
          <li>相手に暗号化ツールを知られても、鍵が知られなければ安全</li>
          <li>最近はコンピューターでの暗号化が主流</li>
        </ul>
      </section>
    </Section>
  )
}