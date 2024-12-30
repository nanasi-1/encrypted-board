import { classnameBuilder } from "@/utils/classname-builder"
import Link from "next/link"
import styles from './pagination.module.css'

type NavProps = {
  children: React.ReactNode
  current?: boolean
} & ({
  disabled: true
  href?: string
} | {
  disabled?: false
  href: string
})

function Nav({ children, href, current, disabled }: NavProps) {
  const innerClassname = classnameBuilder()
    .add(styles['inner'])
    .add(current ? styles['current'] : null)
    .add(disabled ? styles['disabled'] : null)
    .build()

  if (disabled) {
    return (
      <li className={styles['list-item']}>
        <span className={innerClassname}>{children}</span>
      </li>
    )
  }

  return (
    <li className={styles['list-item']}>
      <Link className={styles['anchor']} href={href}>
        <span className={innerClassname}>{children}</span>
      </Link>
    </li>
  )
}

// Navと同じwidthのコンポーネント
function NavDummy() {
  return <li className="w-10"></li>
}

export default function Pagination({ currentPage = 3 /* 仮 */ }: {
  currentPage?: number
}) {
  const basePath = "/"
  const minPage = 0
  const maxPage = 3
  
  return (
    <ul className={styles['pagination-list']}>
      <Nav href="/?page=1" children={1} />
      <Nav href="/?page=2" children={2} current />
      <Nav href="/?page=3" children={3} disabled />
    </ul>
  )
}