import Link from "next/link"
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className="bg-black flex justify-between items-center border-b border-primary py-4">
      <h1 className="px-10">
        <Link href="/" className="text-primary font-bold text-2xl">暗号掲示板</Link>
      </h1>
      <nav className="pr-9">
        <ul className="flex gap-x-6">
          <li className={styles["nav-item"]}>
            <Link href="/about">初めての方はこちら</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/add-public">公開鍵</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/add-sign">署名</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}