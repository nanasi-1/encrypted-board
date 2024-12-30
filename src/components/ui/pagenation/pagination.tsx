import { classnameBuilder } from "@/utils/classname-builder"
import Link from "next/link"
import styles from './pagination.module.css'

function Nav({ children, href, current, disabled }: {
  children: React.ReactNode
  href: string
  current?: boolean
  disabled?: boolean
}) {
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

export default function Pagination() {
  return (
    <ul className="flex gap-x-1">
      <Nav href="/?page=1" children={1} />
      <Nav href="/?page=2" children={2} current />
      <Nav href="/?page=3" children={3} disabled />
    </ul>
  )
}