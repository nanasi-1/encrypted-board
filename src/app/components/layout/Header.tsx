import Link from "next/link"

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">暗号掲示板</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">初めての方はこちら</Link>
          </li>
          <li>
            <Link href="/add-public">公開鍵</Link>
          </li>
          <li>
            <Link href="/add-sign">署名</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}