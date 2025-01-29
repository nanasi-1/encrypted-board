import { GitHubIcon, Icones } from "@/components/ui/icons"
import { tv } from "tailwind-variants"

function Card({ children, className }: {
  children?: React.ReactNode,
  className?: string
}) {
  return (
    <div className={tv({ base: 'bg-black px-6 py-6' })({ className })}>
      {children}
    </div>
  )
}

function OSS() {
  return (
    <Card>
      <div className="flex justify-center items-center mb-3">
        <a href="https://github.com/nanasi-1/encrypted-board"><Icones fontSize={130} Icon={GitHubIcon} /></a>
      </div>
      <p>
        暗号掲示板は<strong>OSS</strong>（
        <a href="https://www.nec-solutioninnovators.co.jp/sl/emb/column/02/index.html">オープンソースソフトウェア</a>
        ）です。
      </p>
      <p>
        ソースコードは<a href="https://github.co.jp">GitHub</a>というWebサイトで公開されてるので、
        <strong>誰でも読むことができます。</strong>
      </p>
      <p>またGitHub上では、このページの文章の改善要望からバグ報告まで幅広く受け付けています。</p>
      <p className="mb-0">初心者の方でも詳しい方でも、見に来ていただけると嬉しいです。</p>
    </Card>
  )
}

function AlgorithmDetails() {
  return (
    <Card>
      <h3 className="text-primary font-bold text-lg mb-3">使用可能な鍵の詳細</h3>
      <p className="mb-2">
        暗号掲示板では以下の条件を満たす鍵を使用できます。
      </p>
      <ul className="mb-0 ml-4 list-disc">
        <li>アルゴリズム：RSA（RSA-OAEP）</li>
        <li>長さ：2048ビット</li>
        <li>ハッシュアルゴリズム：SHA-1</li>
        <li>フォーマット：SPKI と PKCS8 かつ Base64エンコード</li>
      </ul>
    </Card>
  )
}

export default function RightCards() {
  return (
    <div className="flex flex-col gap-y-7">
      <OSS />
      <AlgorithmDetails />
    </div>
  )
}