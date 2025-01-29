import Link from "next/link"
import styles from './pagination.module.css'
import { tv } from "tailwind-variants"

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
  const inner = tv({
    base: styles['inner'],
    variants: {
      current: { true: styles['current'] },
      disabled: { true: styles['disabled'] }
    }
  })

  if (disabled) {
    return (
      <li className={styles['list-item']}>
        <span className={inner({ disabled })}>{children}</span>
      </li>
    )
  }

  return (
    <li className={styles['list-item']}>
      <Link className={styles['anchor']} href={href}>
        <span className={inner({ current })}>{children}</span>
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