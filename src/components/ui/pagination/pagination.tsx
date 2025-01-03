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

export default function Pagination({ currentPage, hasNext, baseHref }: {
  currentPage: number
  hasNext: boolean
  baseHref: string
}) {
  const minPage = 1

  return (
    <ul className={styles['pagination-list']}>
      {
        currentPage - 1 >= minPage
          ? <Nav href={`${baseHref}${currentPage - 1}`}>{currentPage - 1}</Nav>
          : <NavDummy />
      }
      <Nav
        href={`${baseHref}${currentPage}`}
        current
      >{currentPage}</Nav>
      {
        hasNext
          ? <Nav href={`${baseHref}${currentPage + 1}`}>{currentPage + 1}</Nav>
          : <NavDummy />
      }
    </ul>
  )
}