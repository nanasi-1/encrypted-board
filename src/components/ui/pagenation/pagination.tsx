import { classnameBuilder } from "@/utils/classname-builder"
import Link from "next/link"

function Nav({ children, href, current, disabled }: {
  children: React.ReactNode
  href: string
  current?: boolean
  disabled?: boolean
}) {
  const innerClassname = classnameBuilder()
    .addByArray(['border-primary', 'px-2', 'block', 'pb-0.5', 'text-lg'] as const)
    .add(`border-b-${current ? '2' : '0'}`) // 線を入れるかどうか
    .addByArray(disabled ? ['opacity-60', 'cursor-not-allowed'] : ['font-bold'])
    .build()

  const buttonClassname = classnameBuilder()
    .addByArray(["py-2"])
    .build()

  return (
    <li className="w-10 text-center">
      <Link className={buttonClassname} href={href}>
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